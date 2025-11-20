import express from "express";
const app = express();
app.use(express.json());

// Rota simples GET
app.get("/", (req, res) => {
  res.send("Servidor Railway funcionando!");
});

// Rota exemplo com JSON
app.get("/dados", (req, res) => {
  res.json({ produto: "Exemplo", preco: 123 });
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Servidor ligado!")
);

