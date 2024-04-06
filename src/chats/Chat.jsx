import React, { useEffect } from 'react';

const ChatbotComponent = () => {
  useEffect(() => {
    // start
    window.openChatbot = () => {
      
      //Fetching start
      if (window.Chatbase) {
        window.Chatbase.openChatbot();
      } else {
        console.error('Chatbase embed object not available');
      }
    };

    
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
