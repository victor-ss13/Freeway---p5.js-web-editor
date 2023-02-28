//variáveis ator

let xAtor = 85;
let yAtor = 366;
let wAtor = 30;
let hAtor = 30;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, wAtor, hAtor);
}

function movimentaAtor() {
  if(keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)) {
    if(podeMover()) {
    yAtor += 3;
    }
  }
}

function verificaColisao() {
  for(let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], wCarro, hCarro, xAtor, yAtor, 15);
    if(colisao) {
      voltaInicio();
      somColisao.play();
      if(pontosPositivos()) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaInicio() {
  yAtor = 367;
}

function incluiPonto() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(meusPontos, width / 5, 27);
}

function marcaPonto() {
  if(yAtor < 15) {
    meusPontos++;
    voltaInicio();
    somPonto.play();
  }
}

function pontosPositivos() {
  return meusPontos > 0;
}

function podeMover () {
  return yAtor < 366;
}
