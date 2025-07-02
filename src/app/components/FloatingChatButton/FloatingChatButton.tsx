'use client';

import { useState } from 'react';
import { ChatbotModal } from '../ChatbotModal/ChatbotModal';
import styles from './FloatingChatButton.module.css';

export function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleChat() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button 
        className={ styles.FloatingButton }
        onClick={ toggleChat }
        aria-label="Open AI Chatbot"
      >
        { isOpen ? <CloseIcon /> : <ChatIcon /> }
      </button>
      
      {isOpen && (
        <ChatbotModal onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}

function ChatIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      height="24px" 
      viewBox="0 -960 960 960" 
      width="24px" 
      fill="currentColor"
    >
      <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      height="24px" 
      viewBox="0 -960 960 960" 
      width="24px" 
      fill="currentColor"
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
    </svg>
  );
}