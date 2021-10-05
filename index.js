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

const posicoesPermitidas = [[-135, -210], [-120, -210], [-105, -210], [-75, -210], 
[-60, -210], [-45, -210], [-30, -210], [-15, -210], [15, -210], [30, -210], [45, -210],
[60, -210], [75, -210], [105, -210], [135, -210], 
[-135, -195], [-105, -195], [-75, -195], [-15, -195], [75, -195], [105, -195], [135, -195],
[-135, -180], [-105, -180], [-75, -180], [-60, -180], [-45, -180], [-15, -180], [0, -180], 
[15, -180], [30, -180], [45, -180], [75, -180], [105, -180], [120, -180], [135, -180],
[-135, -165], [-15, -165], [15, -165], [75, -165], [105, -165], [135, -165],
[-135, -150], [-120, -150], [-105, -150], [-90, -150], [-75, -150], [-60, -150], [-45, -150],
[-30, -150], [-15, -150], [15, -150], [30, -150], [45, -150], [60, -150], [75, -150], [105, -150], [135, -150],
[-135, -135], [-75, -135], [15, -135], [105, -135], [135, -135],
[-135, -120], [-105, -120], [-90, -120], [-75, -120], [-45, -120], [-30, -120], [-15, -120], [15, -120], [45, -120], 
[60, -120], [75, -120], [90, -120], [105, -120], [135, -120],
[-135, -105], [-45, -105], [-15, -105], [15, -105], [45, -105], [105, -105], [135, -105], [150, -105], 
[-150, -90], [-135, -90], [-120, -90], [-105, -90], [-90, -90], [-75, -90], [-45, -90], [-15, -90], [15, -90], [45, -90],
[75, -90], [105, -90],
[-75, -75], [-45, -75], [-15, -75], [15, -75], [45, -75], [75, -75], [105, -75], [135, -75],
[-135, -60], [-120, -60], [-105, -60], [-90, -60], [-75, -60], [-45, -60], [-15, -60], [15, -60], [30, -60], [45, -60], 
[75, -60], [105, -60], [135, -60],
[-135, -45], [-15, -45], [75, -45], [105, -45], [135, -45],
[-135, -30], [-120, -30], [-105, -30], [-90, -30], [-75, -30], [-60, -30], [-45, -30], [-15, -30], [0, -30], [15, -30],
[30, -30], [45, -30], [60, -30], [75, -30], [105, -30], [120, -30], [135, -30]];

function movimenta () {

}

let posicaoJogadorLeft = -165;
let posicaoJogadorTop = -90;
let posicaoJogador = [posicaoJogadorLeft, posicaoJogadorTop];
let posicaoPretendida = [];
document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if (keyName === 'ArrowUp'){
       
    posicaoPretendida =  [posicaoJogadorLeft, posicaoJogadorTop - 15];  
    //
    if(ehPosicaoPermitida(posicaoPretendida)) {      
      posicaoJogadorTop -= 15;
    } 
    //
  } else if (keyName === 'ArrowDown') {    
    posicaoPretendida =  [posicaoJogadorLeft, posicaoJogadorTop + 15];  
    
        //
        if(ehPosicaoPermitida(posicaoPretendida)) {
          posicaoJogadorTop += 15;
        }
        //
  } else if (keyName === 'ArrowLeft') {
    posicaoPretendida =  [posicaoJogadorLeft - 15, posicaoJogadorTop];
     
     
        //
        if(ehPosicaoPermitida(posicaoPretendida)) {
          posicaoJogadorLeft -= 15;  
        }
        //
  } else if (keyName === 'ArrowRight') {    
    posicaoPretendida =  [posicaoJogadorLeft + 15, posicaoJogadorTop];
    
    
        //
        if(ehPosicaoPermitida(posicaoPretendida)) {
          posicaoJogadorLeft += 15;  
        }
        //
  }
    document.getElementById("jogador").style.top = posicaoJogadorTop + 'px';
    document.getElementById("jogador").style.left = posicaoJogadorLeft + 'px';

  // para testes de posição
  document.getElementById("paragrafoPosicaoLeft").innerText = "Posição Left do jogador: " + posicaoJogadorLeft;
  document.getElementById("paragrafoPosicaoTop").innerText = "Posição Top do jogador: " + posicaoJogadorTop;
  document.getElementById("testePosicaoPermitida").innerText = "Posição do Jogador: " + posicaoJogador;
// fim teste de posição

});

// teste
// console.log(posicoesPermitidas); 
// teste

function ehPosicaoPermitida (posicaoEntrada) {
  let ehPermitida = false;
  console.log("posição de entrada: " + posicaoEntrada);
  for (let indice = 0; indice<posicoesPermitidas.length; indice++){
    console.log("posições permitidas: " + posicoesPermitidas[indice]);
    if ((posicoesPermitidas[indice][0] === posicaoEntrada[0]) && (posicoesPermitidas[indice][1] === posicaoEntrada[1])){
      console.log("POSIÇÃO PERMITIDA ENCONTRADA");
      ehPermitida = true;
      return ehPermitida;
      // console.log("É uma posição permitida");
    }
  }  
}