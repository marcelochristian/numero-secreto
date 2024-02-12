let armazenaChute = [];
console.log(armazenaChute);
let numeroSecreto = gerarNumeroAleatorio(); //parseInt(Math.random() * 10 + 1);
let tentativas = 100;
console.log(numeroSecreto);
exibirMensagemInicial();
// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 e 10";

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} !`;
        exibirTextoNaTela("P", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
        armazenaChute.push(numeroSecreto);
        console.log(armazenaChute);
        if (armazenaChute.includes(numeroSecreto)) {
            return gerarNumeroAleatorio();
        }
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor");
        } else {
            exibirTextoNaTela("p", "O número secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function exibirTextoNaTela(tag, texto) {
    let mudaTexto = document.querySelector(tag);
    mudaTexto.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
