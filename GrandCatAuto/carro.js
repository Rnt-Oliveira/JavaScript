//VARIÁVEIS DOS CARROS
let carrosX = [800, 800, 800, 800, 800];
let carrosY = [8, 122, 251, 365, 464];
let carrosV = [9, 4, 6, 8, 7];
let carrosC = 80;
let carrosA = 50;
let carroHit = carrosA / 3;

//EXIBIÇÃO DOS CARROS
function Carros() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    image(imagemCarros[i], carrosX[i], carrosY[i], carrosC, carrosA);
  }
}

//MOVIMENTAÇÃO DOS CARROS
function moveCarro() {
  for (let i = 0; i < carrosX.length; i = i + 1) {
    carrosX[i] -= carrosV[i];
    
  }
}

//REPETIÇÃO DOS CARROS
function resetCarro() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    if (tamanhoPista(carrosX[i])) {
      carrosX[i] = 800;
      carrosV[i] = random(4, 10);
    }
  }
}

function tamanhoPista(carrosX) {
  return carrosX < -50;
}
