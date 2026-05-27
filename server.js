import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import usuario from "./src/models/usuario.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "page.html"));
});

usuario.sync({ alter: true });

app.post("/api/usuario", async (req, res) => {
  const { email, senha } = req.body;
  try {
    const hash = await bcrypt.hash(senha, 10);
    await usuario.create({ email, senha: hash });
    res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    res.status(400).json({ mensagem: "Erro ao cadastrar usuário!" });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, senha } = req.body;
  try {
    const usuarioEncontrado = await usuario.findOne({ where: { email } });
    if (!usuarioEncontrado) {
      return res.status(404).json({ mensagem: "Usuário não encontrado." });
    }
    const senhaValida = await bcrypt.compare(senha, usuarioEncontrado.senha);
    if (!senhaValida) {
      return res.status(401).json({ mensagem: "Senha incorreta." });
    }
    const token = jwt.sign(
      { id: usuarioEncontrado.id, email: usuarioEncontrado.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.json({ mensagem: "Login bem-sucedido!", token });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro interno." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
