import "./styles.css";

const button = document.getElementById("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
const result = document.getElementById("result");

function add(num1: number, num2: number) {
  return num1 + num2;
}

function writeToResult(val) {
  result.innerText = val;
}

function calculate(e) {
  e.preventDefault();
  writeToResult(add(+input1.value, +input2.value));
}

button.addEventListener("click", calculate);
input1.addEventListener("keyup", calculate);
input2.addEventListener("keyup", calculate);
