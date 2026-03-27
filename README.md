# 🎬 StarFilmes

Sistema web desenvolvido para gerenciamento e visualização de filmes, com funcionalidades de cadastro e login de usuários.

---

## 🚀 Tecnologias utilizadas

* Node.js
* Express
* SQLite
* Sequelize
* HTML5
* CSS3
* JavaScript

---

## 📁 Estrutura do projeto

```
STARFILMES/
│
├── public/                # Frontend (arquivos públicos)
│   ├── css/
│   ├── imagens/
│   ├── contato.html
│   ├── indexcine.html
│   ├── login.html
│   ├── rj.html
│   └── sp.html
│
├── src/                   # Backend (lógica da aplicação)
│   ├── controllers/
│   ├── models/
│   ├── databases/
│   
│   
│
├── server.js              # Inicialização do servidor
├── package.json
└── README.md
```

---

## ⚙️ Funcionalidades

* 📄 Listagem de filmes
* 👤 Cadastro de usuários
* 🔐 Login de usuários
* 🌐 Interface web simples

---

### 🔐 Login

```
POST /api/login
```

**Body (JSON):**

```json
{
  "email": "teste@gmail.com",
  "senha": "123456"
}
```

---

### 🎬 Listar filmes

```
GET /api/filmes
```

---

## 🛠️ Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/starfilmes.git
```

### 2. Entrar na pasta

```bash
cd starfilmes
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Rodar o servidor

```bash
node server.js
```

---

## 🌍 Acessar no navegador

```
http://localhost:3000
```

---

## 🧪 Testar API

Você pode usar ferramentas como:

* Insomnia
* Postman

---

## 📌 Observações

* O banco de dados SQLite é criado automaticamente
* O projeto está em evolução (melhorias futuras)

---

## 🚀 Melhorias futuras

* 🔐 Autenticação com JWT
* 🔒 Criptografia de senha (bcrypt)
* 🎨 Melhorar UI/UX
* 📊 Dashboard de filmes
* 👥 Sistema de usuários mais completo

---

## 👨‍💻 Autor

Desenvolvido por **Anderson Mesquita**

---

## 📄 Licença

Este projeto está sob a licença MIT.
