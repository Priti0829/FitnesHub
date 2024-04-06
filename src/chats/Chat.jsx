import React, { useEffect } from 'react';

const ChatbotComponent = () => {
  useEffect(() => {
    // Create a global function to open the chatbot
    window.openChatbot = () => {
      // Check if the Chatbase embed object is available
      if (window.Chatbase) {
        // Call the openChatbot method to open the chatbot
        window.Chatbase.openChatbot();
      } else {
        console.error('Chatbase embed object not available');
      }
    };

    // Cleanup function to remove the global function when the component unmounts
    return () => {
      delete window.openChatbot;
    };
  }, []);

  return (
    <button onClick={() => window.openChatbot()}>
      Open Chatbot
    </button>
  );
};

export default ChatbotComponent;
