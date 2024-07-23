import React, { useState } from 'react';
import './Chatbot.css'; // Make sure to import your CSS file
const { queryPython } = require('./queryPython');

function Chatbot({ visible }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChatbot = () => setIsOpen(!isOpen);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const handleInputChange = (event) => setInput(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    // Add user message to chat
    setMessages((prevMessages) => [...prevMessages, { text: input, type: 'user' }]);
    setInput('');

    try {
      // Send the input to Python backend
      const data = await queryPython(input);
      const botMessage = data.response;

      // Add bot response to chat
      setMessages((prevMessages) => [...prevMessages, { text: botMessage, type: 'bot' }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prevMessages) => [...prevMessages, { text: 'Sorry, something went wrong.', type: 'bot' }]);
    }
  };

  return (
    <div className={`chatbot-container ${visible ? 'show' : ''} ${isOpen ? 'open' : ''} ${isExpanded ? 'expanded' : ''}`}>
      <div className="chatbot-header" onClick={toggleChatbot}>
        <div className="chatbot-icon">💬</div>
        <div className="chatbot-prompt">Chat with us</div>
        <div className="chatbot-buttons">
          <button className="expand-button" onClick={toggleExpand}></button>
        </div>
      </div>
      <div className={`chatbot-body ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`chatbot-message ${message.type}`}>
              {message.text}
            </div>
          ))}
          <div className="typing-indicator" />
        </div>
        <form className="chatbot-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="chatbot-input"
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chatbot;
