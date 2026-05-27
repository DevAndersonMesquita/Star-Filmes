async function cadastrar() {

    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const nome = document.getElementById('nome');
    const date = document.getElementById('date');
    const cpf = document.getElementById('cpf');
    
    const resposta = await fetch("/api/usuario", {
        
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email.value, senha: senha.value, nome: nome.value, date: date.value, cpf: cpf.value })
    });
    
    const dados = await resposta.json();    
    if (resposta.ok){
        window.location.href = "/public/page.html";
    }else{
        alert('Está conta não existe!');
    
    }
} 

async function entrar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const resposta = await fetch("/api/login", {
        method : "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({email: email , senha: senha})
    });
    const dados = await resposta.json()
    if(resposta.ok){
        localStorage.setItem("token", dados.token)
        window.location.href = "/public/page.html"
    }else{
        alert(dados.mensagem)
    }
}
