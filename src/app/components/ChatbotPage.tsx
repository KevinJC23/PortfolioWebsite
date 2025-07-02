'use client';

import { useState, useRef } from 'react';
import { Assistant } from '@/lib/googleai';
import { Message } from '@/types/chat';
import { Chat } from '../components/Chat/Chat';
import { Controls } from '../components/Controls/Controls';
import { Loader } from '../components/Loader/Loader';
import styles from './Chatbot.module.css';

export default function ChatbotPage() {
  const assistantRef = useRef(new Assistant());
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);

  function updateLastMessageContent(content: string) {
    setMessages((prevMessages) => prevMessages.map((message, index) => 
      index === prevMessages.length - 1 ? { ...message, content: `${message.content}${content}` } : message));
  }

  function addMessage(message: Message) {
    setMessages((prevMessages) => [...prevMessages, message]);
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
    <div className={styles.App}>
      {isLoading && <Loader />}
      <header className={styles.Header}>
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages}/>
      </div>
      <Controls isDisabled={isLoading || isStreaming} onSend={handleContentSend}/>
    </div>
  );
}