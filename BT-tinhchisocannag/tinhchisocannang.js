let weight = document.getElementById("kg").value;
let height = document.getElementById("m").value;
let bmi = weight / (height * height);
function check() {
  if (bmi < 18) {
    document.write("Underweight");
  } else if (bmi < 25.0) {
    document.write("Normal");
  } else if (bmi < 30.0) {
    document.write("Overweight");
  } else {
    document.write("Obese");
  }
}
