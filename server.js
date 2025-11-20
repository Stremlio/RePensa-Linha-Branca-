// server.js
const express = require("express");
const fetch = require("node-fetch"); // ou built-in fetch se Node >= 18
const cors = require("cors");
require("dotenv").config(); // se você quiser colocar o GH_TOKEN em .env

const app = express();
app.use(cors()); // permite requisições do navegador
app.use(express.json());

// Endpoint para receber agendamento do front-end
app.post("/novo_agendamento", async (req, res) => {
  try {
    const payload = req.body;

    // Dispara o workflow no GitHub
    const response = await fetch("https://api.github.com/repos/Stremlio/RePensa-Linha-Branca-/dispatches", {
      method: "POST",
      headers: {
        "Accept": "application/vnd.github+json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GH_TOKEN || "GH_TOKEN"}`
      },
      body: JSON.stringify({
        event_type: "novo_registro",
        client_payload: payload
      })
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(500).json({ success: false, error: text });
    }

    res.json({ success: true, message: "Agendamento enviado para GitHub com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Inicializa servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
