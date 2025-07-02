'use client'

import { useEffect, useRef, useMemo } from 'react';
import Markdown from 'react-markdown';
import { Message } from '@/types/chat';
import styles from './Chat.module.css';

const WELCOME_MESSAGE_GROUP: Message[] = [
    {
        role: 'assistant',
        content: "Hello! I'm an AI Chatbot powered by Gemini. How can I assist you today?",
    }
];

interface ChatProps {
    messages: Message[];
}

export function Chat({ messages }: ChatProps) {
    const messageEndRef = useRef<HTMLDivElement>(null);
    const messageGroup = useMemo(() => messages.reduce((groups: Message[][], message) => {
        if(message.role === 'user') groups.push([]);
        groups[groups.length - 1].push(message);
        return groups;
    }, [[]]), [messages]);

    useEffect(() => {
        const lastMessage = messages[messages.length - 1];

        if(lastMessage?.role === 'user') {
            messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return(
        <div className={ styles.Chat }>
            {[WELCOME_MESSAGE_GROUP, ...messageGroup].map((messages, groupIndex) => (
                <div key={ groupIndex } className={ styles.Group }>
                    {messages.map(({ role, content }, index) => (
                        <div key={ index } className={ styles.Message } data-role={ role }>
                            <Markdown>{ content }</Markdown>
                        </div>
                    ))}
                </div>
            ))}
            <div ref={ messageEndRef } />
        </div>
    );
}