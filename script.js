let campoChute = document.getElementById("campoChute");
let botaoChutar = document.getElementById("botaoChutar");
let mensagem =  document.getElementById("mensagem");

let numeroSecreto ;

function iniciarJogo() {
     numeroSecreto = Math.floor(Math.random() * 100) + 1;

     mensagem.textContent = "";
     campoChute.value = "";
     botaoChutar.textContent = "Chutar!";

     campoChute.disabled = false;
     campoChute.focus();
     console.log(numeroSecreto);

     botaoChutar.removeEventListener("click", iniciarJogo);
     botaoChutar.addEventListener("click", verificarChute);
}

function verificarChute(){
    let chute = parseInt(campoChute.value);

    if (isNaN(chute) || chute < 1 || chute > 100){
         mensagem.textContent = "Por favor, digite um número entre 1 e 100.";
         mensagem.style.color = 'red';

         campoChute.value = '';
         return;
    }

    if (chute === numeroSecreto){
        mensagem.textContent = "Parabéns você acertou o número " + numeroSecreto + "!";
        mensagem.style.color = '#ff84bdff';

        finalizarJogo();
    } else if (chute < numeroSecreto) {
        mensagem. textContent = "Muito baixo! Tente um número maior.";
        mensagem.style.color = '#ff0077ff';
    } else if (chute > numeroSecreto) {
        mensagem.textContent = "Muito alto! Tente um número maior."
         mensagem.style.color = '#ff0077ff';
    }

    campoChute.value = '';
    campoChute.focus();

}

function finalizarJogo(){
     campoChute.disabled = true; 

     botaoChutar.textContent = 'Jogar novamente!';

     botaoChutar.removeEventListener('click', verificarChute);
     botaoChutar.addEventListener('click', iniciarJogo);
}

iniciarJogo();