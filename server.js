// server.js
const express = require("express");
const app = express();
app.use(express.json());

app.post("/api/agendamentos", (req, res) => {
  console.log("Agendamento recebido:", req.body);
  res.json({ message: "Agendamento OK!" });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
