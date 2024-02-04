function input(value) {
  document.querySelector(".display").innerText += value;
}

function clearDisplay() {
  document.querySelector(".display").innerHTML = "";
}

function deleteValue() {
  let currentValue = document.querySelector(".display").innerHTML;
  if (currentValue.length > 0) currentValue = currentValue.slice(0, -1);
  document.querySelector(".display").innerHTML = currentValue;
}

function add() {}

function calculate() {
  const operation = document.querySelector(".display").innerHTML;
  let evaluation = Function("return " + operation)();
  //   const evaluation = eval(operation);
  clearDisplay();
  document.querySelector(".display").innerHTML = evaluation;
}
