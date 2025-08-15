"use client";

import { useParams } from "next/navigation";
import { useCharacter } from "@/context/CharacterContext";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type Message = {
  id: number;
  type: "user" | "assistant";
  message: string;
  timestamp: string;
};

function ChatPage() {
  const { personaName } = useParams();
  const { characterData } = useCharacter();
  const [messages, setMessages] = useState<Message[]>(() => {
    // Load messages from localStorage on initial render
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`chat-messages-${personaName}`);
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Fallback: Try to load character data from localStorage if context is empty
  const [fallbackCharacterData, setFallbackCharacterData] = useState<any>(null);

  useEffect(() => {
    if (!characterData && typeof window !== "undefined") {
      const savedCharacterData = localStorage.getItem("characterData");
      if (savedCharacterData) {
        setFallbackCharacterData(JSON.parse(savedCharacterData));
      }
    }
  }, [characterData]);

  const currentCharacterData = characterData || fallbackCharacterData;

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!currentCharacterData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white-gradient-start to-white-gradient-end flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-dark mb-4">
            Character Not Found
          </h1>
          <p className="text-gray-medium mb-6">
            Please go back and select a character to chat with.
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-primary-red text-white px-6 py-3 rounded-full hover:bg-primary-red-dark transition-colors duration-300">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // if (personaName !== characterData.slug) {
  //   return <div>Not found</div>;
  // }

  const saveMessagesToStorage = (newMessages: Message[]) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        `chat-messages-${personaName}`,
        JSON.stringify(newMessages)
      );
    }
  };

  const clearMessages = () => {
    setMessages([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem(`chat-messages-${personaName}`);
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      message,
      timestamp: new Date().toISOString(),
    };

    // Append user message first
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    saveMessagesToStorage(newMessages);
    setMessage("");

    try {
      setIsLoading(true);

      // Create the full conversation context including the new user message
      const fullConversation = [
        ...messages.map((m) => ({
          role: m.type,
          content: m.message,
        })),
        {
          role: "user",
          content: message,
        },
      ];

      const res = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: fullConversation,
          characterSlug: personaName,
        }),
      });

      const data = await res.json();

      const assistantMessage: Message = {
        id: userMessage.id + 1,
        type: "assistant",
        message: data.reply,
        timestamp: new Date().toISOString(),
      };

      const updatedMessages = [...newMessages, assistantMessage];
      setMessages(updatedMessages);
      saveMessagesToStorage(updatedMessages);
      setMessage("");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error("API Error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white-gradient-start to-white-gradient-end">
      {/* Main Content */}
      <div className="h-screen flex">
        {/* Character Details - Left Side (30%) */}
        <div className="w-1/3 p-8 flex flex-col items-center justify-center">
          {currentCharacterData ? (
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={currentCharacterData.src}
                  alt={currentCharacterData.title}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-dark mb-3">
                {currentCharacterData.title}
              </h2>
              <p className="text-gray-medium leading-relaxed">
                {currentCharacterData.description}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-light">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Available for chat</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-medium">
              <p>Character information not available</p>
            </div>
          )}
        </div>

        {/* Chat Messages - Right Side (70%) */}
        <div className="w-2/3 bg-white flex flex-col">
          {/* Chat Header with Clear Button */}
          <div className="flex justify-between items-center p-4 border-b border-gray-light bg-white">
            <h3 className="text-lg text-red-500 font-semibold text-gray-dark">Chat</h3>
            {messages.length > 0 && (
              <button
                onClick={clearMessages}
                className="px-3 py-1 text-sm text-red-500 hover:text-primary-red hover:bg-red-50 rounded-md transition-colors duration-300 font-medium">
                Clear Messages
              </button>
            )}
          </div>
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((chat) => (
              <div
                key={chat.id}
                className={`flex ${
                  chat.type === "user" ? "justify-end" : "justify-start"
                }`}>
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    chat.type === "user"
                      ? "bg-primary-red text-white"
                      : "bg-gray-light text-gray-dark"
                  }`}>
                  <p className="text-sm leading-relaxed">{chat.message}</p>
                  <p
                    className={`text-xs mt-2 ${
                      chat.type === "user" ? "text-red-100" : "text-gray-medium"
                    }`}>
                    {chat.timestamp}
                  </p>
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-xs lg:max-w-md px-4 py-3 rounded-2xl bg-gray-light text-gray-dark">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-medium rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-medium rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}></div>
                      <div
                        className="w-2 h-2 bg-gray-medium rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}></div>
                    </div>
                    <span className="text-sm text-gray-medium">Typing...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-light p-4 bg-white">
            <div className="flex items-end space-x-3">
              <div className="flex-1">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="w-full px-4 py-3 border border-gray-light rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent text-primary-red placeholder-gray-medium"
                  rows={1}
                  style={{ minHeight: "44px", maxHeight: "120px" }}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={isLoading}
                className="bg-primary-red text-white p-3 rounded-xl hover:bg-primary-red-dark transition-colors duration-300 cursor-pointer">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
