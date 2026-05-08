# 🤖 Shiva – AI Chatbot:

A full-stack conversational AI chatbot powered by Groq's LLaMA 3.3 model, built with React and Node.js.

![Tech Stack](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Groq](https://img.shields.io/badge/Groq_API-F55036?style=for-the-badge&logo=groq&logoColor=white)

---

## Overview:

Shiva is a responsive AI chatbot that uses the Groq API (LLaMA 3.3 70B) to generate intelligent, context-aware responses. It supports multi-turn conversations, meaning it remembers the chat history within a session — just like ChatGPT.

---

## Features:

- Multi-turn conversation with full memory
- Real-time typing indicator
- Dark themed responsive UI
- Clear chat functionality
- Enter to send, Shift+Enter for new line

---

## Tech Stack:

| Layer | Technology |
|-------|------------|
| Frontend | React, CSS |
| Backend | Node.js, Express.js |
| AI Model | Groq API — LLaMA 3.3 70B |
| Dev Tool | Nodemon |

---

## Project Structure:

- shiva-chatbot/
* backend/
   -server.js
   -.env
   -package.json
* frontend/
  -folder- src/
        - App.js
        - App.css
        - index.js
        - package.json
- README.md
---

## Getting Started

### Prerequisites
- Node.js (v18 or above)
- Free Groq API key from [console.groq.com](https://console.groq.com)

---

### 1. Clone the repo

```bash
git clone https://github.com/AayushiMohan/shiva-chatbot.git
cd shiva-chatbot
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`: 
- GROQ_API_KEY=your_groq_api_key_here
  PORT=5000
---
Start the server:

```bash
npm run dev
```

> Server runs on http://localhost:5000

---

### 3. Setup Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

> App runs on http://localhost:3000

---

### 4. Open in browser

Visit **http://localhost:3000** and start chatting!

> Both terminals must be running at the same time.

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `GROQ_API_KEY` | Your Groq API key from console.groq.com |
| `PORT` | Backend port (default: 5000) |

---

## Future Improvements

- Save chat history with MongoDB
- User authentication
- Multiple AI personas
- Deploy on Vercel + Render

---

## Author

**Aayushi Mohan**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/aayushimohan)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AayushiMohan)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://am-portfolio-lilac.vercel.app)
