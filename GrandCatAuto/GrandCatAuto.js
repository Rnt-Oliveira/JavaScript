//Arquivo Principal
function setup() {
  createCanvas(800, 600);
  somTrilha.loop();
  somCarro.loop();
}

function draw() {
  background(imagemEstrada);
  Ator();
  Carros();
  moveCarro();
  moveAtor();
  resetCarro();
  resetAtor();
  colisaoV();
  bordaAtor();
  mostraPonto();
  marcaPonto();
}
