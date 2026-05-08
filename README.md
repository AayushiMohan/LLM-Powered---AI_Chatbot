🤖 Shiva – LLM-Powered AI Chatbot:
A full-stack AI chatbot powered by Groq's LLaMA 3 model, built with React and Node.js/Express.

Features:
- Multi-turn conversation with memory
- Typing indicator while AI responds
- Clean dark-themed UI
- Fully responsive design
- Enter to send, Shift+Enter for new line
- Clear chat button


Tech Stack:
LayerTechnologyFrontendReact, CSSBackendNode.js, Express.jsAI ModelGroq API (LLaMA 3.3 70B)HTTP Clientnode-fetch.

Project Structure:
shiva-chatbot/
│
├── backend/
│   ├── server.js          # Express server + Groq API integration
│   ├── .env               # API key (never push this to GitHub!)
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.js         # Main chat UI component
│   │   ├── App.css        # Dark theme styling
│   │   └── index.js       # React entry point
│   ├── public/
│   │   └── index.html
│   └── package.json

🚀 How to Run Locally
Prerequisites:

Node.js installed (nodejs.org)
A free Groq API key


Step 1 — Get your FREE Groq API Key

Go to → console.groq.com
Sign up with your Google account
Click API Keys → Create API Key
Name it anything (e.g. shiva-chatbot)
Copy the key


Step 2 — Clone the Repository
bashgit clone https://github.com/AayushiMohan/shiva-chatbot.git
cd shiva-chatbot

Step 3 — Setup Backend
bashcd backend
npm install
Create a .env file inside the backend folder:
GROQ_API_KEY=your_groq_api_key_here
PORT=5000
Start the backend server:
bashnpm run dev
You should see → ✅ Server running on http://localhost:5000

Step 4 — Setup Frontend
Open a new terminal:
bashcd frontend
npm install
npm start
You should see the app open at → http://localhost:3000

Step 5 — Start Chatting!
Make sure both terminals are running at the same time and go to:
👉 http://localhost:3000

⚠️ Important Notes:

Never push your .env file to GitHub — add it to .gitignore
Both backend and frontend must be running simultaneously
Every time you restart VS Code, run both servers again.


Future Improvements:

Save chat history to MongoDB
Add user authentication
Support multiple AI personas
Deploy frontend on Vercel + backend on Render

