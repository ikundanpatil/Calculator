let currentValue = "";

const result = document.getElementById("result");
const expression = document.getElementById("expression");

function addValue(value) {
  currentValue += value;
  result.textContent = currentValue || "0";
}

function clearCalculator() {
  currentValue = "";
  result.textContent = "0";
  expression.textContent = "";
}

function percentage() {
  if (currentValue === "") {
    return;
  }
  let number = Number(currentValue);
  if (isNaN(number)) {
    return;
  }
  currentValue = (number / 100).toString();
  result.textContent = currentValue;
}

function plusMinus() {
  if (currentValue === "") {
    return;
  }
  let number = Number(currentValue);
  if (isNaN(number)) {
    return;
  }
  number = number * -1;
  currentValue = number.toString();
  result.textContent = currentValue;
}

function calculate() {
  if (currentValue === "") {
    return;
  }
  try {
    let answer = eval(currentValue);
    if (!isFinite(answer)) {
      result.textContent = "Error";
      return;
    }
    expression.textContent = currentValue;
    result.textContent = answer;
    currentValue = answer.toString();
  } catch {
    result.textContent = "Error";
  }
}
