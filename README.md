---
# 🎬 StarFilmes

Sistema web desenvolvido para gerenciamento e visualização de filmes, com funcionalidades de cadastro e login de usuários.

---

## 🚀 Tecnologias utilizadas

* Node.js
* Express
* PostgreSQL
* Sequelize
* HTML5
* CSS3
* JavaScript

---

## ☁️ Deploy

O projeto está publicado na **Microsoft Azure Cloud**:

🔗 [https://starfilmes-aqdcg3cdgse7b2cn.brazilsouth-01.azurewebsites.net](https://starfilmes-aqdcg3cdgse7b2cn.brazilsouth-01.azurewebsites.net)

* Hospedagem: Azure App Service (Linux)
* Banco de dados: Neon (PostgreSQL)
* CI/CD: GitHub Actions

---
---

## 📁 Estrutura do projeto
STARFILMES/
│
├── public/                # Frontend (arquivos públicos)
│   ├── assets/
│   │   ├── CSS/
│   │   └── imagens/
│   ├── contato.html
│   ├── indexcine.html
│   ├── login.html
│   ├── rj.html
│   └── sp.html
│
├── src/                   # Backend (lógica da aplicação)
│   ├── controllers/
│   ├── models/
│   └── database/
│
├── server.js              # Inicialização do servidor
├── package.json
└── README.md

---

## ⚙️ Funcionalidades

* 📄 Listagem de filmes
* 👤 Cadastro de usuários
* 🔐 Login de usuários
* 🌐 Interface web simples

---

## 🛠️ Como rodar localmente

### 1. Clonar o repositório
```bash
git clone https://github.com/DevAndersonMesquita/Star-Filmes.git
```

### 2. Entrar na pasta
```bash
cd Star-Filmes
```

### 3. Instalar dependências
```bash
npm install
```

### 4. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz:
DATABASE_URL=sua_url_do_postgresql

### 5. Rodar o servidor
```bash
node server.js
```

---

## 🌍 Acessar no navegador
http://localhost:3000

---

## 🧪 Rotas da API

### 🔐 Login
POST /api/login
**Body (JSON):**
```json
{
  "email": "teste@gmail.com",
  "senha": "123456"
}
```

### 👤 Cadastro
POST /api/usuario
**Body (JSON):**
```json
{
  "email": "teste@gmail.com",
  "senha": "123456"
}
```

### 🎬 Listar filmes
GET /api/filmes

---

## 👨‍💻 Autor

Desenvolvido por **Anderson Mesquita**

---

## 📄 Licença

Este projeto está sob a licença MIT.
