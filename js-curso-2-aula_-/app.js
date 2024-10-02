let listaDeNumerosSorteados = []
let numeroLimite = 100
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

function mostraTextoInicial(){
    mostrarTextoNaTela("h1", "Jogo da cabeça do palhaço")
    mostrarTextoNaTela("p", `Escolha o numero que o palhaço está pensando. [Dick: É de 1 a ${numeroLimite} = )]`)
}

mostraTextoInicial()

function verificarChute() {
    let chute = document.querySelector("input").value
        if(chute == numeroSecreto){
            let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
            mostrarTextoNaTela("h1", "Acertou Miseravel")
            mostrarTextoNaTela("p", `Parabens, você acertou o numero secreto com ${tentativas} ${palavraTentativa}`)
            document.getElementById("reiniciar").removeAttribute("disabled")
        } else {
            if (chute > numeroSecreto){
                mostrarTextoNaTela("p", "O numero é menor")
            } else{
                mostrarTextoNaTela("p", "O numero é maior")
            }
            tentativas++
            limparCampo()
        }   
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = []
    }


    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido 
    }
}


function mostrarTextoNaTela(tag, texto) {
    let mostrarTextoNaTela = document.querySelector(tag)
        mostrarTextoNaTela.innerHTML = texto 
}    

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = ""
}


function reiniciarJogo(){
    mostraTextoInicial()
    numeroSecreto = gerarNumeroAleatorio() // Atualiza o valor do número secreto
    tentativas = 1 
    limparCampo()
    document.getElementById("reiniciar").setAttribute("disabled", "")
}
