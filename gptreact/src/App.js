
import './App.css';

function App() {
  const apiKey = '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'; // Replace with your actual API key

        function sendMessage() {
            const userInput = document.getElementById('user-input').value;
            const chatLog = document.getElementById('chat-log');
            document.getElementById('user-input').value = '';

            // Display user message
            chatLog.innerHTML += `<div key=${Date.now()}>User: ${userInput}</div>`;
            
            // Send user message to ChatGPT API
            fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: userInput }],
                })
            })
            .then(response => response.json())
            .then(data => {
                // Display ChatGPT's response
                const chatGptResponse = data.choices[0].message.content;
                chatLog.innerHTML += `<div>ChatGPT: ${chatGptResponse}</div>`;
            })
            .catch(error => console.error('Error:', error));
        }
  return (
    <div>
      <div id="chat-container">
        <div id="chat-log"></div>
    </div>
    <div>
        <label htmlFor="user-input">User:</label>
        <input type="text" id="user-input" placeholder="Type your message here"/>
        <button onClick={sendMessage} >Send</button>
    </div>
    
    </div>
  );
}

export default App;
