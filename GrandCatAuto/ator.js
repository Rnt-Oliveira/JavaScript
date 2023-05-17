//VARIÁVEIS DO ATOR
let atorX = 364;
let atorY = 551;
let atorV = 3;
let atorC = 60;
let atorA = 60;
let atorD = 40;
let atorR = atorD / 2;
let pontos = 0;

let colisao = false;

//EXIBIÇÃO DO ATOR
function Ator() {
  image(imagemAtor, atorX, atorY, atorC, atorA);
}

//MOVIMENTAÇÃO DO ATOR
function moveAtor() {
  if (keyIsDown(UP_ARROW)) {
    atorY -= atorV;
    
  }
  if (keyIsDown(DOWN_ARROW)) {
    atorY -= -atorV;
    
  }
  if (keyIsDown(RIGHT_ARROW)) {
    atorX -= -atorV;
    
  }
  if (keyIsDown(LEFT_ARROW)) {
    atorX -= atorV;
    }
}
//COLISÃO COM AS BORDAS
function bordaAtor() {
  //colisão com a borda do eixo X
  if (atorX + atorR > width) {
    atorX = 748;
  }
  if (atorX + atorR < 0) {
    atorX = 0;
  }

  //colisão com a borda de baixo do eixo Y sem bugar a função resetAtor
  if (atorY + atorR > height) {
    atorY = 551;
  }
}

//RESET RANDOMICO DA POSIÇÃO DO ATOR QUANDO ULTRAPASSA A BORDA SUPERIOR
function resetAtor() {
  if (atorY < 0) {
    seFu();
  }
}

//FUNÇÃO DE COLISÃO COM OS CARROS
function colisaoV() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(
      carrosX[i],
      carrosY[i],
      carrosC,
      carroHit,
      atorX,
      atorY,
      atorR
    );
    if (colisao) {
      seFu();
      somColisao.play();
      if (vPontos()){
      pontos -= 1;
      }  
    }
  }
}

function seFu() {
  atorY = 551;
  atorX = random(50, 748);

}

//CONTAGEM DE PONTOS
function mostraPonto() {
  textSize(25);
  textAlign(CENTER);
  fill(color(255, 240, 60));
  rect(60, 3, 40, 25);
  fill(0);
  textStyle(BOLD);
  text(pontos, width / 10, 25);
  fill(color(255));
  textSize(15);
  text("Pontos", 30, 20);
}
//CONTADOR DE PONTOS (SOLUÇÃO TEMPORÁRIA)
function marcaPonto() {
  if (atorY < 3) {
    pontos += 1;
    somPonto.play();
    resetAtor();
  }
}
//VERIFICAÇÃO DE PONTOS
function vPontos(){
  return pontos > 0;
}