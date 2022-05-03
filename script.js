let botaoLimpar = document.getElementById('clear-board');
botaoLimpar.addEventListener("click",  limpeza);
function limpeza() {
  let pixel = document.querySelectorAll('.pixel');
  for (i = 0; i < pixel.length; i += 1) {
  document.querySelectorAll('.pixel')[i].style.backgroundColor = "white";
  }
}

let corSelects = document.querySelector('#color-palette');
corSelects.addEventListener("mouseover", selecaoDeCor);
function selecaoDeCor() {
  let cor1 = document.querySelectorAll('.color')[0];
  let cor2 = document.querySelectorAll('.color')[1];
  let cor3 = document.querySelectorAll('.color')[2];
  let cor4 = document.querySelectorAll('.color')[3];
  let cores = document.querySelectorAll('.color');
    cor1.addEventListener("click", selecionandoCor1);
      function selecionandoCor1 () {
        for (i = 0; i < cores.length; i += 1){
          document.querySelectorAll('.color')[i].classList.remove("selected");
          document.querySelectorAll('.color')[0].className = 'color selected';
        }
      }
    cor2.addEventListener("click", selecionandoCor2);
      function selecionandoCor2 () {
        for (i = 0; i < cores.length; i += 1){
          document.querySelectorAll('.color')[i].classList.remove("selected");
          document.querySelectorAll('.color')[1].className = 'color selected';
        }
      }
    cor3.addEventListener("click", selecionandoCor3);
      function selecionandoCor3 () {
        for (i = 0; i < cores.length; i += 1){
          document.querySelectorAll('.color')[i].classList.remove("selected");
          document.querySelectorAll('.color')[2].className = 'color selected';
        }
      }
    cor4.addEventListener("click", selecionandoCor4);
      function selecionandoCor4 () {
        for (i = 0; i < cores.length; i += 1){
          document.querySelectorAll('.color')[i].classList.remove("selected");
          document.querySelectorAll('.color')[3].className = 'color selected';
        }
      }
}


let corSelecionada = document.querySelector('.selected');
let pixelSelecionado = document.querySelectorAll('.pixel');

let quadradoDePixel = document.querySelector('#pixel-board');
quadradoDePixel.addEventListener("mouseover", aplicandoCor);
function aplicandoCor() {
  let pixel = document.querySelectorAll('.pixel');
  for (i = 0; i < pixel.length; i += 1) {
  document.querySelectorAll('.pixel')[i].style.backgroundColor = "red";
  }
}
cor4.addEventListener("click", selecionandoCor4);
function selecionandoCor4 () {
//  let corSelecionada = document.getElementById('color');
// console.log(corSelecionada)

// document.getElementsByClassName('pixel').style.backgroundColor = "red";