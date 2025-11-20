import express from "express";
import multer from "multer";

const app = express();
app.use(express.json());

// Configuração do upload
const upload = multer({ dest: "uploads/" });

// Endpoint que recebe o agendamento
app.post("/agendamento", upload.single("arquivo"), (req, res) => {
  console.log("Arquivo recebido:", req.file);
  console.log("Dados do formulário:", req.body);

  res.json({ sucesso: true, mensagem: "Agendamento enviado!" });
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Servidor ligado!")
);

