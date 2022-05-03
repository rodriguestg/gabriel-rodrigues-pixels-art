const botaoLimpar = document.getElementById('clear-board');
botaoLimpar.addEventListener('click',  limpeza);
function limpeza() {
    const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    document.querySelectorAll('.pixel')[i].style.backgroundColor = "white";
  }
  document.querySelector('#pixel-board').style.backgroundColor = "white";
}

let cores = [];
for (let i = 0; i < 4; i += 1) {
  cores.push(document.querySelectorAll('.color')[i]);
}

const corSelects = document.querySelector('#color-palette');
corSelects.addEventListener("mouseover", selecaoDeCor);
function selecaoDeCor() {
    cores[0].addEventListener("click", selecionandoCor1);
      function selecionandoCor1 () {
        for (let i = 0; i < cores.length; i += 1) {
          document.querySelectorAll('.color')[i].classList.remove("selected");
          document.querySelectorAll('.color')[0].className = 'color selected';
        }
      }
    cores[1].addEventListener("click", selecionandoCor2);
      function selecionandoCor2 () {
        for (let i = 0; i < cores.length; i += 1) {
          document.querySelectorAll('.color')[i].classList.remove("selected");
          document.querySelectorAll('.color')[1].className = 'color selected';
        }
      }
    cores[2].addEventListener("click", selecionandoCor3);
      function selecionandoCor3 () {
        for (let i = 0; i < cores.length; i += 1) {
          document.querySelectorAll('.color')[i].classList.remove("selected");
          document.querySelectorAll('.color')[2].className = 'color selected';
        }
      }
    cores[3].addEventListener("click", selecionandoCor4);
      function selecionandoCor4 () {
        for (let i = 0; i < cores.length; i += 1) {
          document.querySelectorAll('.color')[i].classList.remove("selected");
          document.querySelectorAll('.color')[3].className = 'color selected';
        }
      }
}

let quadradoDePixel = document.querySelector('#pixel-board');
quadradoDePixel.addEventListener("mouseover", quadro);
function quadro() {
  let pixelSelecionado = event.target;
  if (cores[0].className === 'color selected') {
    function aplicandoCor1() {
      pixelSelecionado.style.backgroundColor = "black";
      quadradoDePixel.style.backgroundColor = "white";
    }
  } else if (cores[1].className === 'color selected') {
    function aplicandoCor1() {
      pixelSelecionado.style.backgroundColor = "yellow";
      quadradoDePixel.style.backgroundColor = "white";
    }
  } else if (cores[2].className === 'color selected') {
    function aplicandoCor1() {
      pixelSelecionado.style.backgroundColor = "red";
      quadradoDePixel.style.backgroundColor = "white";
    }
  } else if (cores[3].className === 'color selected') {
    function aplicandoCor1() {
      pixelSelecionado.style.backgroundColor = "blue";
      quadradoDePixel.style.backgroundColor = "white";
    }
  }
  pixelSelecionado.addEventListener("click", aplicandoCor1);
}
