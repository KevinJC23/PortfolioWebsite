'use client';

import { useState, useRef, useEffect } from 'react';
import { Assistant } from '@/lib/googleai';
import { Chat } from '../Chat/Chat';
import { Controls } from '../Controls/Controls';
import { Loader } from '../Loader/Loader';
import { usePersistedMessages } from '@/hooks/usePersistedMessages'; 
import styles from './ChatbotModal.module.css';

interface ChatbotModalProps {
  onClose: () => void;
}

export function ChatbotModal({ onClose }: ChatbotModalProps) {
  const assistantRef = useRef(new Assistant());
  const { messages, addMessage, setMessages } = usePersistedMessages(); 
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const modal = document.querySelector(`.${styles.Modal}`);
      if (modal && !modal.contains(event.target as Node)) {
        onClose();
      }
    }

    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [onClose]);

  function updateLastMessageContent(content: string) {
    setMessages((prevMessages) => prevMessages.map((message, index) => 
      index === prevMessages.length - 1 ? { ...message, content: `${message.content}${content}` } : message));
  }
  
  async function handleContentSend(content: string) {
    addMessage({ content, role: "user" });
    setIsLoading(true);
    try {
      const result = await assistantRef.current.chatStream(content);
      let isFirstChunk = false;

      for await (const chunk of result) {
        if(!isFirstChunk) {
          isFirstChunk = true;
          addMessage({ content: "", role: "assistant" });
          setIsLoading(false);
          setIsStreaming(true);
        }

        updateLastMessageContent(chunk);
      }

      setIsStreaming(false);
    } catch (error) {
      addMessage({ 
        content: "Sorry, I couldn't process your request. Please try again!", 
        role: 'system', 
      });
      setIsLoading(false);
      setIsStreaming(false);
    }
  }

  return (
    <div className={ styles.Overlay }>
      <div className={ styles.Modal }>
        <div className={ styles.Header }>
          <div className={ styles.HeaderContent }>
            <h3 className={ styles.Title }>AI Chatbot</h3>
          </div>
          <button 
            className={ styles.CloseButton }
            onClick={ onClose }
            aria-label="Close chat"
          >
            <CloseIcon />
          </button>
        </div>
        
        <div className={ styles.ChatContainer }>
          { isLoading && <Loader /> }
          <Chat messages={ messages } />
        </div>
        
        <div className={ styles.ControlsContainer }>
          <Controls 
            isDisabled={ isLoading || isStreaming } 
            onSend={ handleContentSend }
          />
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      height="20px" 
      viewBox="0 -960 960 960" 
      width="20px" 
      fill="currentColor"
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
    </svg>
  );
}
