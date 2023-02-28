//variáveis gerais dos carros

let wCarro = 50;
let hCarro = 40;

//listas

let xCarros = [600, 600, 600, 0, 0, 0];
let yCarros = [40, 96, 150, 210, 262, 318];
let velocidadeCarros = [3, 2.5, 4.5, -2.3, -5, -4];



function mostraCarro() {
  for(let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], wCarro, hCarro);
  }
}

function movimentaCarro() {
  for(let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i]; 
  }
}

function voltaPosicaoInicialDoCarro() {
  for(let i = 0; i < imagemCarros.length; i++) {
  if(passouTodaATela(xCarros[i])) {
    xCarros[i] = 600;
   }
    if(passouTelaBaixa(xCarros[i])) {
      xCarros[i] = -45;
    }
  }
}

function passouTodaATela(xCarros) {
  return xCarros < -45;
}

function passouTelaBaixa(xCarros) {
  return xCarros > 645;
}
