import express from "express";
import usuario from "./src/models/usuario.js";
import bcrypt from "bcrypt" ;
import  jwt  from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/api/filmes", (req, res) => {
  res.json([
    { nome: "Batman", ano: 2022 },
    { nome: "Homem-Aranha", ano: 2021 },
    { nome: "Vingadores", ano: 2019 }
  ]);
});

usuario.sync({alter : true})
app.post("/api/usuario", async (req, res) => {
    const { email, senha } = req.body;
    try{

  const hash = await bcrypt.hash(senha, 10);
  await usuario.create({ email: email, senha: hash })
  res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" })

    } catch (error) {
  res.status(400).json({ mensagem: "Erro ao cadastrar usuário!" })
  }
  });

  
  
  app.post("/api/login", async (req, res) => {
    const { email, senha } = req.body;
    try {
      const usuarioEncontrado = await usuario.findOne({ where: { email: email } });

     if (!usuarioEncontrado) {
  return res.status(404).json({ mensagem: "Usuário não encontrado." });
}




const senhaValida = await bcrypt.compare(senha, usuarioEncontrado.senha);

if (!senhaValida) {
  return res.status(401).json({ mensagem: "Senha incorreta." });
}
      const token = jwt.sign(
        { id: usuarioEncontrado.id, email: usuarioEncontrado.email }, // dados do usuário
        process.env.JWT_SECRET, // chave secreta do .env
        { expiresIn: "7d" } // expira em 7 dias
      )
      res.json({ mensagem: "Login bem-sucedido!", token: token });
      
    } catch (error) {
      res.status(500).json({ mensagem: "Erro interno." })
    }
  });






    app.listen(3000, () => {
      console.log("Servidor rodando em http://localhost:3000");
    });