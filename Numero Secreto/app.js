let listaDeNumerosSorteados = []
let numeroLimite = 10;

let NumeroSecreto = NumeroAleatorio(); //Variavel do numero aleatorio
let Tentativas = 1; // Numero de tentativas

function ExibirTextoNaTela(tag, texto) { //Cria a função para exibir o texto do jogo 
    let campo = document.querySelector(tag); //puxa a tag de onde editar o texto
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2}); (NÃO FUNCIONOU NÃO SEI PQ :( )
}
function MensagemInicial() {
    ExibirTextoNaTela('h1', "Jogo do número secreto"); // Exibe o Título de Jogo
    ExibirTextoNaTela('p', "Escolha um número entre 1 e 10"); // Exibe o texto do Jogo
    console.log(NumeroSecreto);
}
MensagemInicial();
function verificarChute() { //Função NOME() {AÇÃO}
    let chute = document.querySelector('input').value; // 
    console.log(chute == NumeroSecreto);
    if (chute == NumeroSecreto) {
        let Português = Tentativas > 1 ? 'tentativas' : 'tentativa';
        let MsgTentativas = `Você descobriu o número secreto em ${Tentativas} ${Português}!`;
        ExibirTextoNaTela('h1', "ACERTOU!!");
        ExibirTextoNaTela('p', MsgTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else
        if (chute > NumeroSecreto) {
            ExibirTextoNaTela('h1', "ERROOU!");
            ExibirTextoNaTela('p', "O número secreto é menor!");
        } else {
            ExibirTextoNaTela('h1', "ERROOU!");
            ExibirTextoNaTela('p', "O número secreto é maior!");
            Tentativas++;
            LimparCampo();
        }
}

function NumeroAleatorio() {
    let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);// gera o número aleatório
    let QtdDeElementosNaLista = listaDeNumerosSorteados.length;

    if (QtdDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }


    if (listaDeNumerosSorteados.includes(NumeroEscolhido)) {
        return NumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(NumeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return NumeroEscolhido;
    }

}

function LimparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarjogo() {
    MensagemInicial();
    NumeroSecreto = NumeroAleatorio();
    LimparCampo();
    Tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}