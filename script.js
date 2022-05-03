const botaoLimpar = document.getElementById('clear-board');
function limpeza() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    document.querySelectorAll('.pixel')[i].style.backgroundColor = "white";
  }
  document.querySelector('#pixel-board').style.backgroundColor = "white";
}
botaoLimpar.addEventListener('click', limpeza);

const cores = [];
for (let i = 0; i < 4; i += 1) {
  cores.push(document.querySelectorAll('.color')[i]);
}

function resetSelected() {
  for (let i = 0; i < cores.length; i += 1) {
    document.querySelectorAll('.color')[i].classList.remove("selected");
  }
}

const corSelects = document.querySelector('#color-palette');
function selecaoDeCor() {
  function selecionandoCor1() {
    document.querySelectorAll('.color')[0].className = 'color selected';
  }
  cores[0].addEventListener("click", resetSelected);
  cores[0].addEventListener("click", selecionandoCor1);
  function selecionandoCor2() {
    document.querySelectorAll('.color')[1].className = 'color selected';
  }
  cores[1].addEventListener("click", resetSelected);
  cores[1].addEventListener("click", selecionandoCor2);
  function selecionandoCor3() {
    document.querySelectorAll('.color')[2].className = 'color selected';
  }
  cores[2].addEventListener("click", resetSelected);
  cores[2].addEventListener("click", selecionandoCor3);
  function selecionandoCor4() {
    document.querySelectorAll('.color')[3].className = 'color selected';
  }
  cores[3].addEventListener("click", resetSelected);
  cores[3].addEventListener("click", selecionandoCor4);
}
corSelects.addEventListener("mouseover", selecaoDeCor);

const quadradoDePixel = document.querySelector('#pixel-board');
function quadro() {
  const pixelSelecionado = event.target;
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
quadradoDePixel.addEventListener("mouseover", quadro);
