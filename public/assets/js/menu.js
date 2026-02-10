const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
document.getElementById("contatoForm").addEventListener("submit", function(event){
    let valid = true;
    const nomeInput = document.getElementById("Nome");
    const nomeError = document.getElementById("NomeError");
    let nome = nomeInput.value.trim();
    nomeError.textContent = "";
    if(nome === ""){
        nomeError.textContent = "O nome completo não pode estar em branco.";
        valid = false;
    } else {
        const partes = nome.split(" ");
        if(partes.length < 2){
            nomeError.textContent = "Digite nome e sobrenome.";
            valid = false;
        } else {
            if(partes[0].length < 2 || partes[1].length < 2){
                nomeError.textContent = "Nome e sobrenome devem ter ao menos 2 letras cada.";
                valid = false;
            }
        }
    } 
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    emailError.textContent = "";

    if(emailInput.value.trim() === ""){
        emailError.textContent = "O e-mail não pode estar em branco.";
        valid = false;
    } else {
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailValido.test(emailInput.value)){
            emailError.textContent = "Digite um e-mail válido.";
            valid = false;
        }
    }
    const msgInput = document.getElementById("mensagem");
    const msgError = document.getElementById("mensagemError");
    msgError.textContent = "";

    if(msgInput.value.trim() === ""){
        msgError.textContent = "A mensagem não pode estar em branco.";
        valid = false;
    } else if(msgInput.value.length > 500){
        msgError.textContent = "A mensagem deve ter no máximo 500 caracteres.";
        valid = false;
    }

    if(!valid){
        event.preventDefault(); 
    }
});
