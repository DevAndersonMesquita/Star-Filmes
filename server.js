const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/api/filmes", (req, res) => {
  res.json([
    { nome: "Batman", ano: 2022 },
    { nome: "Homem-Aranha", ano: 2021 },
    { nome: "Vingadores", ano: 2019 }
  ]);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});