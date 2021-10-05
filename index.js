const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];


function movimenta () {

}

let posicaoJogadorLeft = -165;
let posicaoJogadorTop = -90;
document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if (keyName === 'ArrowUp'){
    posicaoJogadorTop -= 15;      
  } else if (keyName === 'ArrowDown') {    
    posicaoJogadorTop += 15;
  } else if (keyName === 'ArrowLeft') {
    posicaoJogadorLeft -= 15;    
  } else if (keyName === 'ArrowRight') {    
    posicaoJogadorLeft += 15;    
  }
    document.getElementById("jogador").style.top = posicaoJogadorTop + 'px';
    document.getElementById("jogador").style.left = posicaoJogadorLeft + 'px';

  // para testes de posição
document.getElementById("paragrafoPosicaoTop").innerText = "Posição Top do jogador: " + posicaoJogadorTop;
document.getElementById("paragrafoPosicaoLeft").innerText = "Posição Left do jogador: " + posicaoJogadorLeft;
// fim teste de posição

});


