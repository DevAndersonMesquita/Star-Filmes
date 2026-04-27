import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import usuario from "./src/models/usuario.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "indexcine.html"));
});

app.get("/api/filmes", (req, res) => {
  res.json([
    { nome: "Batman", ano: 2022 },
    { nome: "Homem-Aranha", ano: 2021 },
    { nome: "Vingadores", ano: 2019 }
  ]);
});

usuario.sync();

app.post("/api/usuario", async (req, res) => {
  const { email, senha } = req.body;
  await usuario.create({ email, senha });
  res.json([{ email }, { senha }]);
});

app.post("/api/login", (req, res) => {
  const { email, senha } = req.body;
  console.log(req.body);
  res.json([{ email }, { senha }]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});