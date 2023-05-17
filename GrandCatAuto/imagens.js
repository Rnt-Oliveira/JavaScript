//Todas as imagens do jogo
let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

function preload() {
  //soundFormats('mp3', 'wav');
  //imageFormats('jpeg', 'png');
  imagemEstrada = loadImage("Imagens e Sons/Estrada.png");
  imagemAtor = loadImage("Imagens e Sons/Ator.png");
  imagemCarro = loadImage("Imagens e Sons/Carro1.png");
  imagemCarro1 = loadImage("Imagens e Sons/Carro2.png");
  imagemCarro2 = loadImage("Imagens e Sons/Carro3.png");
  imagemCarro3 = loadImage("Imagens e Sons/Carro4.png");
  imagemCarro4 = loadImage("Imagens e Sons/Carro1.png");

  imagemCarros = [
    imagemCarro,
    imagemCarro1,
    imagemCarro2,
    imagemCarro3,
    imagemCarro4,
  ];
  somTrilha = loadSound("Imagens e Sons/Trilha.mp3");
  somPonto = loadSound("Imagens e Sons/Ponto.mp3");
  somColisao = loadSound("Imagens e Sons/Gato.mp3");
  somCarro = loadSound("Imagens e Sons/Carro.mp3");
}
