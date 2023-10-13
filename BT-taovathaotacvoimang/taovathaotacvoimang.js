let array = [];
let result = document.getElementById("result");
function addValue() {
  array.push(document.getElementById("textValue").value);
  alert("input success!");
}
function displayValue() {
  for (let i = 0; i < array.length; i++) {
    result.innerHTML =
      result.innerHTML + "Element" + i + "=" + array[i] + "</br>";
  }
}
