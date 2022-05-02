function selecaoDeCor() {
  document.getElementsByClassName("selected").click()
}

function limpeza() {
  document.getElementsByClassName("pixel").style.backgroundColor = "red";
  document.getElementById("pixel-board").style.backgroundColor = "blue";
}