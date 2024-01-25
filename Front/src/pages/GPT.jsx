//GPT

//import './App.css';

function GPT() {
  const apiKey = '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'; // Replace with your actual API key

        function sendMessage() {
            const userInput = document.getElementById('user-input').value;
            const chatLog = document.getElementById('chat-log');
            document.getElementById('user-input').value = '';

            // Display user message
            chatLog.innerHTML += `<div key=${Date.now()}>Me : ${userInput}</div>`;
            
            // Send user message to ChatGPT API
            fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: "Ici chatGPT est utilisé comme aide assistance dans une appli qui s'appelle PleaseComeBack, tu dois te comporter comme un employé très fier de ton entreprise et qui la défend coute que coute. Dans l'appli en question on peut réserver du matériel électronique ou des machines telle que des imprimantes 3D etc on peut aussi prendre des composants tels que des résistances donc tu seras ammené à répondre à des questions de ce type, seul obligation pour toi tu dois répondre en moins de 200 caractères et donc être très bref et aussi tu dois tout le temps répondre en anglais. Vous vous appelez Mr. Hammer et êtes très sûr de vous avec aussi une touche d'humour donc vous répondez toujours avec ces traits là je vous laisse avec le message :"+userInput }],
                })
            })
            .then(response => response.json())
            .then(data => {
                // Display ChatGPT's response
                const chatGptResponse = data.choices[0].message.content;
                chatLog.innerHTML += `<div>Mr. Hammer : ${chatGptResponse}</div>`;
            })
            .catch(error => console.error('Error:', error));
        }
  return (
    <div>
      <div id="chat-container">
        <div id="chat-log"></div>
    </div>
    <div className="EnvoyerMessage">
        <label htmlFor="user-input"></label>
        <input type="text" id="user-input" className="user-input" placeholder="Type your message here"/>
        <button onClick={sendMessage} className="user-input-send" >Send</button>
    </div>
    
    </div>
  );
}

export default GPT;
