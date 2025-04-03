import React, { useEffect } from 'react';

function LogPage() {
    const onMessageInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            const messageList = document.getElementById('message-list');
            const message = event.target.value;
            messageList.innerHTML += `<div class="message-item"><div class="user-message">${message}</div></div>`;
            event.target.value = '';
            fetch('https://scaleme.azurewebsites.net/multi/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([
                    { role: 'user', content: message }
                ])
            })
                .then((response) => response.json())
                .then((data) => {
                    messageList.innerHTML += `<div class="message-item"><div class="bot-message">${data.data}</div></div>`;
                });
        }
    };
    
    useEffect(() => {
        document.getElementById('message-input').addEventListener('keydown', onMessageInputKeyDown, false);
  
        return () => {
            document.getElementById('message-input').removeEventListener("keydown", onMessageInputKeyDown, false);
        }            
    }, []);
      
    return (
        <div>
            <h1>Log Page</h1>
            <p>This is the log page where you can see logs.</p>
            <div>Input your GUY message here and press "Enter" to send (don't send it again before getting the previous response)</div>
            <input type="text" id="message-input" width="100%" />
            <div id="message-list"></div>
        </div>
    );
}

export default LogPage; 