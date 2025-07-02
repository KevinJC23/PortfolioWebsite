import { useState, useEffect } from 'react';
import { Message } from '@/types/chat';

const STORAGE_KEY = 'chatbot-messages';

export function usePersistedMessages() {
    const [messages, setMessages] = useState<Message[]>([]);

    // Load messages from sessionStorage on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = sessionStorage.getItem(STORAGE_KEY);
            if (stored) {
                try {
                    setMessages(JSON.parse(stored));
                } catch (error) {
                    console.error('Failed to parse stored messages:', error);
                }
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined' && messages.length > 0) {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
        }
    }, [messages]);

    const addMessage = (message: Message) => {
        setMessages(prev => [...prev, message]);
    };

    const clearMessages = () => {
        setMessages([]);
        if (typeof window !== 'undefined') {
            sessionStorage.removeItem(STORAGE_KEY);
        }
    };

    return { messages, addMessage, clearMessages, setMessages };
}