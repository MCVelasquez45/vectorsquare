import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import sendMessageToChatGPT from "../chatGPTApi/chatGPTApi"; // Import the API handler

const Chat = () => {
    const [userInput, setUserInput] = useState("");
    const [messages, setMessages] = useState([]);

    const speak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    };

    const handleSend = async () => {
        if (!userInput.trim()) return;

        const newMessages = [...messages, { role: "user", content: userInput }];
        setMessages(newMessages);

        const botResponse = await sendMessageToChatGPT(userInput);
        setMessages([...newMessages, { role: "bot", content: botResponse }]);

        speak(botResponse);

        setUserInput("");
    };

    const handleKeyUp = (event) => {
        if (event.key === "Enter") {
            handleSend();
        }
    };

    const startSpeechRecognition = () => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = "en-US";

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setUserInput(transcript);
        };

        recognition.onerror = (error) => {
            console.error("Speech recognition error:", error);
        };

        recognition.start();
    };

    return (
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-4 md:p-6 rounded-lg shadow-lg max-w-full md:max-w-lg mx-auto">
            <div className="mb-4 overflow-y-auto max-h-96">
                {messages.map((msg, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mb-2 text-sm md:text-base ${
                            msg.role === "user" ? "text-right" : "text-left"
                        }`}
                    >
                        <strong>{msg.role === "user" ? "You" : "ChatGPT"}:</strong> {msg.content}
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={startSpeechRecognition}
                    className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg"
                >
                    🎙️ Speak
                </motion.button>
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyUp={handleKeyUp}
                    placeholder="Type a message"
                    className="flex-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-yellow-500 text-sm md:text-base"
                />
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleSend}
                    className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg"
                >
                    Send
                </motion.button>
            </div>
        </div>
    );
};

export default Chat;