import express from "express"
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

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhos0t:300");
});

app.post("/api/login", (req, res ) =>{ 

 const {email, senha } = req.body
console.log(req.body)

 res.json([
    { email: email},
    { senha: senha},
  ])
});
