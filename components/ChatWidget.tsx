import { useState, useRef, useEffect, FormEvent } from 'react';
import { GoogleGenAI } from '@google/genai';
import type { Chat } from '@google/genai';

type Message = {
    role: 'user' | 'model';
    text: string;
};

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
    </svg>
);


const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [input, setInput] = useState('');
    const chatRef = useRef<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const initializeChat = () => {
        if (process.env.API_KEY && !chatRef.current) {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const systemInstruction = "You are a friendly and knowledgeable assistant for the Palm Court Karate dojo. Your name is 'Sensei AI'. Answer questions about the dojo, its classes, schedule, history, instructors, and general karate knowledge. Keep your answers concise, helpful, and encouraging. If you don't know an answer, say so politely.";
            chatRef.current = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: { systemInstruction },
            });
            setMessages([
                { role: 'model', text: 'Hello! How can I help you with your karate journey today?' }
            ]);
        }
    };

    const toggleOpen = () => {
        setIsOpen(prev => {
            if (!prev) {
                initializeChat();
            }
            return !prev;
        });
    };

    const handleSendMessage = async (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !chatRef.current) return;

        const userMessage: Message = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await chatRef.current.sendMessage({ message: input });
            const aiText = response.text;
            setMessages(prev => [...prev, { role: 'model', text: aiText }]);
        } catch (error) {
            console.error('Error sending message to Gemini:', error);
            setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <>
            <button
                onClick={toggleOpen}
                className="fixed bottom-5 right-5 w-16 h-16 bg-gray-900 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-black transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 z-50"
                aria-label="Open Dojo Assistant Chat"
            >
                <ChatIcon />
            </button>

            <div className={`fixed bottom-24 right-5 w-full max-w-sm h-[60vh] bg-white rounded-xl shadow-2xl flex flex-col z-50 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                {/* Header */}
                <header className="bg-gray-100 p-4 flex justify-between items-center rounded-t-xl border-b border-gray-200">
                    <div>
                        <h3 className="font-bold text-lg">Dojo Assistant</h3>
                        <p className="text-sm text-green-600 font-semibold">● Online</p>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800" aria-label="Close Chat">
                        <CloseIcon />
                    </button>
                </header>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs lg:max-w-sm px-4 py-2 rounded-2xl ${msg.role === 'user' ? 'bg-amber-800 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                                <p className="text-sm break-words">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                         <div className="flex justify-start">
                            <div className="bg-gray-200 text-gray-800 rounded-2xl rounded-bl-none px-4 py-2">
                                <div className="flex items-center justify-center space-x-1">
                                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                
                {/* Input Form */}
                <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200 rounded-b-xl">
                    <div className="relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask a question..."
                            className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-700 transition-shadow"
                            disabled={isLoading}
                        />
                        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:text-amber-800 rounded-full transition-colors disabled:opacity-50" disabled={isLoading || !input.trim()}>
                            <SendIcon />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ChatWidget;
