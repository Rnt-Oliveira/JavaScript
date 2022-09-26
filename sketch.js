//Variáveis da Bola (localização nos eixos X e Y, diametro, velocidade nos eixos X e Y, e raio da bola) 
let xBola = 400;
let yBola = 300;
let dBola = 20;
let vXBola = 5;
let vYBola = 5;
let rBola = dBola/2;

//Variáveis da Raquete(localização nos eixos X e Y, comprimento, e altura)
let xRaquete = 5;
let yRaquete = 250;
let cRaquete = 10;
let aRaquete = 90;

//Variáveis da Raquete do Oponente (localização nos eixos X e Y, e velocidade no eixo Y)
let xORaquete = 785;
let yORaquete = 250;
let vYOponenteRaquete;

//Variável referente a colisão com a raquete
let colisao = false;

//Variáveis do Placar;
let pontosPlayer = 0;
let pontosOponente = 0;

//Sons do jogo
let raquetada;
let pontoPlayer;
let pontoOponente;
let trilha;

function preload(){
  soundFormats('mp3', 'wav');
  trilha = loadSound("trilha.mp3");
  pontoPlayer = loadSound("pontoPlayer.mp3");
  pontoOponente = loadSound("pontoOponente.wav");
  raquetada = loadSound("raquetada.wav");
}

function setup() {
  createCanvas(800, 600);
  trilha.loop();
}

function draw() {
  background(0);
  Bola();
  movimentoBola();
  colisaoBola();
  Raquete(xRaquete,yRaquete);
  Raquete(xORaquete,yORaquete);
  colisaoRaquete(xRaquete, yRaquete);
  colisaoRaquete(xORaquete,yORaquete);
  raquetePlayer();
  //raquetePlayer2();
  oponenteRaquete();
  Placar();
  Ponto();
  bolaPresa();
  
}

function Bola(){
  circle(xBola, yBola, dBola);
}

function movimentoBola(){
  xBola += vXBola;
  yBola += vYBola;
}

function colisaoBola(){
  if (xBola + rBola > width || xBola - rBola < 0){
    vXBola *= -1;
    }
  
  if (yBola + rBola > height || yBola - rBola < 0){
    vYBola *= -1
  }
}

function Raquete(x,y){
   rect (x,y,cRaquete,aRaquete);
}

function colisaoRaquete(x,y){
  colisao = collideRectCircle(x, y, cRaquete, aRaquete, xBola, yBola, rBola);
  if(colisao){
    vXBola *= -1;
    raquetada.play();
  }
}

function raquetePlayer(){
   //Movimentação da raquete
  if (keyIsDown(87)){
    yRaquete -= 10;
    }
  
  if (keyIsDown(83)){
    yRaquete += 10;
  }
}  

function oponenteRaquete(){
  //Movimentação automática da raquete do oponente
  vYOponenteRaquete = yBola - yORaquete - cRaquete / 2 - 30;
  yORaquete += vYOponenteRaquete;
}

function raquetePlayer2(){
  //Movimentação da raquete do jogador 2
  if (keyIsDown(UP_ARROW)){
    yORaquete -= 10;
    }
  
  if (keyIsDown(DOWN_ARROW)){
    yORaquete += 10;
  }
}

function Placar(){
  textAlign(CENTER);
  textSize(16);
  textStyle(BOLD);
  
  stroke(255);
  
  fill(color(30,144,255));
  rect(230, 10, 40, 20);
  fill(255);
  text(pontosPlayer, 250, 26);
  
  fill(color(255,99,71));
  rect(530, 10, 40, 20);
  fill(255);
  text(pontosOponente, 550, 26);
}

function Ponto(){
  if (xBola > 790){
    pontosPlayer += 1;
    pontoPlayer.play();
  }
  if (xBola < 6){
    pontosOponente += 1;
    pontoOponente.play();
    
  }
}

function bolaPresa(){
    if (xBola - rBola < 0){
    XBola = 23
    }
}
