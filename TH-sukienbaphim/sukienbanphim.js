function upGame() {
  let element = document.getElementById("Taekook");
  element.style.top = parseInt(element.style.top) + 5 + "px";
}
function dowGame() {
  let element = document.getElementById("Taekook");
  element.style.top = parseInt(element.style.top) - 5 + "px";
}
function leftGame() {
  let element = document.getElementById("Taekook");
  element.style.left = parseInt(element.style.left) - 5 + "px";
}
function rightGame() {
  let element = document.getElementById("Taekook");
  element.style.left = parseInt(element.style.left) + 5 + "px";
}

function moveKey(evt) {
  switch (evt.keyCode) {
    case 38:
      upGame();
      break;
    case 40:
      dowGame();
      break;
    case 37:
      leftGame();
      break;
    case 39:
      rightGame();
      break;
  }
}
window.addEventListener("keydown", moveKey);
