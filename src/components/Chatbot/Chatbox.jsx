import React, { useState } from 'react';
import './Chatbox.css'; 

const Chat = () => {
    const [message, setMessage] = useState(''); 
    const [responses, setResponses] = useState([]); 

    const handleSend = async () => {
        if (!message) return; 
        
        const apiUrl = `https://aayu22102.pythonanywhere.com/chat/?user_id='sedd'&message=${encodeURIComponent(message)}`;
        
        try {
            const res = await fetch(apiUrl);
            const data = await res.json();
            setResponses([...responses, { user: message, bot: data.response }]);
            setMessage(''); 
        } catch (error) {
            console.error("Error fetching response:", error);
        }
    };


    return (
        <div id="vant" className='bg'>
       <div className="chat-main">
      <div className="chat-container">
            <h2>Chat with ChromaAI</h2>
            <div className="chat-box">
            <div className="bot-message"></div>
            <div className="bot-message"><span>Chroma:</span>Okay, let's get you the perfect laptop!  I'll ask you some questions to understand your needs better. Don't worry, it's all one question at a time. Let's begin: 1. What will you primarily use the laptop for?(e.g., web browsing, gaming, programming, graphic design, schoolwork, etc.)</div>
                {responses.map((resp, index) => (
                    <div key={index} className="message">
                        <div className="user-message">You: {resp.user}</div>
                        <div className="bot-message"><span>Chroma:</span> {resp.bot}</div>
                    </div>
                ))}
            </div>
            <input placeholder="Ask ChromaBot" className="input" value={message}
                onChange={(e) => setMessage(e.target.value)}     type="text"/>
            <button className="btn" onClick={handleSend}>
            <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
            </svg>

    <span class="text">Generate</span>
</button>
        </div>
        </div>
        </div>
    );
};

export default Chat;
