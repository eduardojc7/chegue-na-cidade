//Projeto agrinho 2025, o fazendeiro está indo para a cidade levar seus produtos para o comercio.
function setup() {
  createCanvas(400, 400); // Cria um canvas de 400x400 pixels
}

let xJogador = [0, 0, 0, 0]; // Posições horizontais iniciais dos jogadores (ainda que só 1 seja usado)
let yJogador = [200, 150, 225, 300]; // Posições verticais dos jogadores (posição na tela)
let jogador = ["👨‍🌾"]; // Lista com os emojis dos jogadores (só 1 está definido)
let teclas = ["a"]; // Lista das teclas que movimentam os jogadores
let quantidade = jogador.length; // Quantidade de jogadores baseada no tamanho da lista `jogador`

function draw() {
  ativaJogo(); // Ativa o jogo mudando a cor do fundo
  desenhaJogadores(); // Desenha os jogadores na tela
  desenhaLinhaDeChegada(); // Desenha a linha de chegada no lado direito
  verificaVencedor(); // Verifica se algum jogador venceu
}

function ativaJogo() {
  if (focused == true) { // Verifica se a aba do jogo está com foco
    background("#247E28"); // Se estiver com foco, fundo verde
  } else {
    background("rgb(255,0,0)"); // Se não estiver com foco, fundo vermelho
  }
}

function desenhaJogadores() {
  textSize(40); // Define o tamanho da fonte para os emojis
  for (let i = 0; i < quantidade; i++) { // Loop pelos jogadores
    text(jogador[i], xJogador[i], yJogador[i]); // Desenha o emoji do jogador na posição correspondente
  }
}

function desenhaLinhaDeChegada() {
  fill("rgb(255,255,255)"); // Define a cor de preenchimento como branca
  rect(350, 0, 10, 400); // Desenha um retângulo branco (linha contínua de chegada)
  fill("white"); // Garante que o preenchimento continue branco
  for (let yAtual = 0; yAtual < 400; yAtual += 20) { // Cria efeito de faixa na linha
    rect(350, yAtual, 10, 10); // Desenha pequenos quadrados brancos para fazer listras
  }
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) { // Loop pelos jogadores
    if (xJogador[i] > 350) { // Se a posição x do jogador passou a linha de chegada
      text(jogador[i] + "chegou a cidade", 50, 200); // Mostra mensagem de vitória
      noLoop(); // Para o loop do draw (para o jogo)
    }
  }
}

function keyReleased() {
  for (let i = 0; i < quantidade; i++) { // Loop pelos jogadores
    if (key == teclas[i]) { // Se a tecla pressionada for a do jogador atual
      xJogador[i] += random(20); // Move o jogador uma distância aleatória até 20 para frente
    }
  }
}