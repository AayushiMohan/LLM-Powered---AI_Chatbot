const express = require("express");
const cors = require("cors");
const fetch = (...args) =>
  import("node-fetch").then(({ default: f }) => f(...args));
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const GROQ_API_KEY = process.env.GROQ_API_KEY;

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "messages array required" });
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: "You are Shiva, a helpful and friendly AI assistant. You are knowledgeable, concise, and always try to give the most useful response possible."
          },
          ...messages
        ],
        max_tokens: 1024,
        temperature: 0.8
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: data.error?.message || "Groq API error" });
    }

    const reply = data.choices?.[0]?.message?.content;
    if (!reply) {
      return res.status(500).json({ error: "No response from Groq" });
    }

    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error: " + err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));