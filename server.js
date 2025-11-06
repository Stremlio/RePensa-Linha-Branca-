// server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let agendamentos = []; // exemplo em memória

app.post("/api/agendamentos", (req, res) => {
  const { local, data, eletro } = req.body;
  if (!local || !data || !eletro) return res.status(400).json({ erro: "Campos obrigatórios" });

  agendamentos.push({ local, data, eletro, criadoEm: new Date() });
  console.log(agendamentos);
  res.status(201).json({ mensagem: "Agendamento recebido!" });
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
