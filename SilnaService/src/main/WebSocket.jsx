import React, { useState, useEffect, useRef } from 'react';
import "./main.css"

function WebSocketComponent() {
    const [messages, setMessages] = useState([]);
    const socket = useRef(null);

    useEffect(() => {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        socket.current = new WebSocket(`${protocol}://${window.location.host}/ws`);

        socket.current.onopen = () => {
            displayMsg('system', 'user', 'connected');
        };

        socket.current.onclose = () => {
            displayMsg('system', 'user', 'disconnected');
        };

        socket.current.onmessage = async (event) => {
            const msg = JSON.parse(await event.data.text());
            if (msg.type === 'meal_input') {
                displayMsg('meal', msg.from, `added a new meal: ${msg.mealName}`);
            }
        };

        return () => {
            if (socket.current) {
                socket.current.close();
            }
        };
    }, []);

    const displayMsg = (cls, from, msg) => {
        setMessages(prevMessages => [
            { cls, from, msg },
            ...prevMessages
        ]);
    };

    // The broadcastEvent function can be used as needed

    return (
        <div>
            <div className="msg">
                <h4>See what others are adding for meals!</h4>
                <div id="message">
                    {messages.map((message, index) => (
                        <div key={index} className={`${message.cls}-event`}>
                            <span>{message.from}</span> {message.msg}
                        </div>
                    ))}
                </div>
            </div>
            <div className="activity disclaimer">
                <p>To see USDA recommended daily nutrients <a href="https://www.nal.usda.gov/human-nutrition-and-food-safety/dri-calculator">click here</a></p>
                <p>The information provided on Silna is for general informational purposes only and is not intended as, nor should it be considered a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. The content on this website is not intended to establish a standard of care to be followed by a user of the website. You understand and agree that neither Silna nor its suppliers or vendors are responsible for any claim, loss, or damage directly or indirectly resulting from your use of this website or the information resources contained on or accessible through this website.</p>
            </div>
        </div>
    );
}

export default WebSocketComponent;