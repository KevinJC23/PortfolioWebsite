'use client';

import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { BackgroundGradient } from '../components/ui/background-gradient';
import { motion } from 'framer-motion';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactPage = () => {
    const [status, setStatus] = useState<FormStatus>('idle');
    
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        
        const formData = {
            name: nameRef.current?.value || '',
            email: emailRef.current?.value || '',
            message: messageRef.current?.value || '',
        };
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setStatus('success');
            if (nameRef.current) nameRef.current.value = '';
            if (emailRef.current) emailRef.current.value = '';
            if (messageRef.current) messageRef.current.value = '';
        } catch(error) {
            setStatus('error');
        }
    }

    const BottomGradient = () => {
        return (
            <>
                <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
                <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
            </>
        );
    };

    const LabelInputContainer = ({
        children,
        className,
    }: {
        children: React.ReactNode;
        className?: string;
    }) => {
        return (
            <div className={cn("flex w-full flex-col space-y-2", className)}>
                {children}
            </div>
        );
    };

    return(
        <div id="contact" className='container max-w-7xl mx-auto py-20'>
            <motion.h1
                className="text-3xl font-bold -mt-2 mb-12 text-center text-neutral-800 dark:text-neutral-200"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Contact Page
            </motion.h1>

            <div className='mt-2 grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='space-y-8'>
                    <h2 className='text-2xl font-semibold -mt-1 mb-4 text-neutral-800 dark:text-neutral-200'>Get in Touch</h2>
                    <p className='text-neutral-600 dark:text-neutral-300 md:w-2/3'>I'm excited to discussing new projects, creative ideas, or opportunities with you. Feel free to contact me</p>
                    <div className='space-y-4'>
                        <div className='flex items-center gap-4'>
                            <FaEnvelope className='w-6 h-6 text-neutral-800 dark:text-neutral-300' />
                            <div>
                                <h3 className='font-semibold text-neutral-800 dark:text-neutral-200'>Email</h3>
                                <a className='text-neutral-600 dark:text-neutral-300'>kevinjuancarlos7@gmail.com</a>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <FaPhone className='w-6 h-6 text-neutral-800 dark:text-neutral-300' />
                            <div>
                                <h3 className='font-semibold text-neutral-800 dark:text-neutral-200'>Phone</h3>
                                <a className='text-neutral-600 dark:text-neutral-300'>+6281281878597</a>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <FaMapMarkerAlt className='w-6 h-6 text-neutral-800 dark:text-neutral-300' />
                            <div>
                                <h3 className='font-semibold text-neutral-800 dark:text-neutral-200'>Location</h3>
                                <p className="text-neutral-600 dark:text-neutral-300">Indonesia</p>
                            </div>
                        </div>
                    </div>
                </div>

                <BackgroundGradient className="rounded-[20px] bg-white p-4 sm:p-10 dark:bg-zinc-900">
                    <div className="w-full max-w-8xl">
                        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                            Send Message
                        </h2>
                        <p className="mt-2 max-w-lg text-sm text-neutral-600 dark:text-neutral-300">
                            I'd love to hear from you. Feel free to send me any message through this form and I'll respond as soon as possible.
                        </p>
                        
                        <form onSubmit={ handleSubmit } className='my-8'>
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="name">Name</Label>
                                <Input 
                                    ref={ nameRef }
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    type="text"
                                    required
                                />
                            </LabelInputContainer>

                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="email">Email Address</Label>
                                <Input 
                                    ref={ emailRef }
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    required
                                />
                            </LabelInputContainer>

                            <LabelInputContainer className="mb-8">
                                <Label htmlFor="message">Message</Label>
                                <textarea 
                                    ref={ messageRef }
                                    id="message"
                                    name="message"
                                    placeholder="Enter your message"
                                    rows={ 4 }
                                    required
                                    className="shadow-input dark:placeholder-text-neutral-600 flex w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600 min-h-[100px] resize-none"
                                />
                            </LabelInputContainer>

                            <button
                                className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] disabled:opacity-50 disabled:cursor-not-allowed"
                                type="submit"
                                disabled={ status === 'loading' }
                            >
                                { status === 'loading' ? 'Sending...' : 'Send Message' } &rarr;
                                <BottomGradient />
                            </button>

                            {status === 'success' && (
                                <p className='text-green-500 text-center font-medium mt-4'>Message sent successfully!</p>
                            )}

                            {status === 'error' && (
                                <p className='text-red-500 text-center font-medium mt-4'>Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </div>
                </BackgroundGradient>
           </div>
        </div>
    )
}

export default ContactPage;