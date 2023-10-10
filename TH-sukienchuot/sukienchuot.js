imgObj = document.getElementById("myImage");
function init() {
  let imgObj = document.getElementById("myImage");
  imgObj.style.position = "relative";
  imgObj.style.left = "0px";
}
function moveRight() {
  let imgObj = document.getElementById("myImage");
  imgObj.style.left = parseInt(imgObj.style.left) + 10 + "px";
}
window.onload = init();
