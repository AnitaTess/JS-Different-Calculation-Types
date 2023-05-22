//lenghts
function convertDistance() {
  const inputField = document.getElementById("input1");
  const unitSelect = document.getElementById("unit");
  const resultElement = document.getElementById("result1");
  const inputDistance = parseFloat(inputField.value);
  const selectedUnit = unitSelect.value;

  let convertedDistance;

  if (selectedUnit === "meters") {
    convertedDistance = {
      kilometers: inputDistance / 1000,
      miles: inputDistance / 1609.34,
      feet: inputDistance * 3.28084
    };
  } else if (selectedUnit === "kilometers") {
    convertedDistance = {
      meters: inputDistance * 1000,
      miles: inputDistance / 1.60934,
      feet: inputDistance * 3280.84
    };
  } else if (selectedUnit === "miles") {
    convertedDistance = {
      meters: inputDistance * 1609.34,
      kilometers: inputDistance * 1.60934,
      feet: inputDistance * 5280
    };
  } else if (selectedUnit === "feet") {
    convertedDistance = {
      meters: inputDistance / 3.28084,
      kilometers: inputDistance / 3280.84,
      miles: inputDistance / 5280
    };
  }

  let resultText = "Converted distances:<br>";
  for (const unit in convertedDistance) {
    const distance = convertedDistance[unit];
    resultText += `${distance} ${unit}<br>`;
  }

  resultElement.innerHTML = resultText;
}

//temperature
function tempcalc() {
let t1n = parseInt(document.getElementById("quantity1").value);
let sel1 = document.getElementById("temperature").value;
let sel2 = document.getElementById("temperature2").value;
let dis = document.getElementById("t-display");

if (sel1 === "C" && sel2 === "F"){
let sum = (t1n * 9/5) + 32;
dis.textContent = sum.toFixed(2) + "°F";
}
if (sel1 === "C" && sel2 === "K"){
  let sum = t1n + 273.15;
  dis.textContent = sum.toFixed(2) + "K";
}
if (sel1 === sel2){
  let sum = t1n;
  dis.textContent = sum.toFixed(2) + "°";
}
if(sel1 === "F" && sel2 === "C"){
let sum = (t1n - 32) * 5/9;
dis.textContent = sum.toFixed(2) + "°C";
}
if(sel1 === "F" && sel2 === "K"){
  let sum = (t1n - 32) * 5/9 + 273.15;
  dis.textContent = sum.toFixed(2) + "K";
  }

if(sel1 === "K" && sel2 === "C"){
    let sum = t1n - 273.15;
    dis.textContent = sum.toFixed(2) + "°C";
    }

    if(sel1 === "K" && sel2 === "F"){
      let sum = (t1n - 273.15) * 9/5 + 32;
      dis.textContent = sum.toFixed(2) + "°F";
      }
}
document.getElementById("convert").addEventListener("click",function(){tempcalc()});

//square root
function calculateSquareRoot() {
  console.log(document.getElementById("quantity12").value);
  var input = parseInt(document.getElementById("quantity12").value);
  console.log(input);
  var result = Math.sqrt(input);
  console.log(result);
  var displayy = document.getElementById("p-display");
  displayy.textContent = result;
}
document.getElementById("pi-calc").addEventListener("click",function(){calculateSquareRoot()});


//calculator
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = calculator.querySelector('.calculator__display')
const operatorKeys = keys.querySelectorAll('[data-type="operator"]')
const decimalKey = keys.querySelector('.decimal');

keys.addEventListener('click', event => {
  if (!event.target.closest('button')) return

  const key = event.target
  const keyValue = key.textContent
  const displayValue = display.textContent
  const { type } = key.dataset
  const { previousKeyType } = calculator.dataset

  if (type === 'number') {
    if (
      displayValue === '0' ||
      previousKeyType === 'operator'
    ) {
      display.textContent = keyValue
    } 
    else {
      display.textContent = displayValue + keyValue
    }
  }

  if (type === 'operator') {
    operatorKeys.forEach(el => { el.dataset.state = '' })
    key.dataset.state = 'selected'

    calculator.dataset.firstNumber = displayValue
    calculator.dataset.operator = key.dataset.key
  }

  if (type === 'back'){
    if (displayValue.length === 1) {
        display.textContent = '0'
      } else {
    display.textContent = displayValue.slice(0, displayValue.length - 1)
      }
  }

  if (type === 'equal') {
    // Perform a calculation
    const firstNumber = calculator.dataset.firstNumber
    const operator = calculator.dataset.operator
    const secondNumber = displayValue
    display.textContent = calculate(firstNumber, operator, secondNumber)
  }

  if (type === 'clear') {
    display.textContent = '0'
    delete calculator.dataset.firstNumber
    delete calculator.dataset.operator
  }

  calculator.dataset.previousKeyType = type
})


function calculate (firstNumber, operator, secondNumber) {
  firstNumber = parseFloat(firstNumber)
  secondNumber = parseFloat(secondNumber)

  if (operator === 'plus') return firstNumber + secondNumber
  if (operator === 'minus') return firstNumber - secondNumber
  if (operator === 'times') return firstNumber * secondNumber
  if (operator === 'divide') return firstNumber / secondNumber
  if (operator === 'percent') return (firstNumber/100) * secondNumber
  if (operator === 'power') return firstNumber ** secondNumber

}

