// State variables
var counter = 0;
var increment = 0;

var counterText = document.getElementById('counter-text');
counterText.innerHTML = counter;

var addBtn = document.getElementById('btn-add');
addBtn.addEventListener('click', addCounter);
function addCounter() {
  counter = counter + increment;
  counterText.innerHTML = counter;
}

var substractBtn = document.getElementById('btn-substract');
substractBtn.addEventListener('click', substractCounter);
function substractCounter() {
  counter = counter - increment;
  counterText.innerHTML = counter;
}

var resetBtn = document.getElementById('btn-reset');
resetBtn.addEventListener('click', resetCounter);
function resetCounter() {
  counter = 0;
  counterText.innerHTML = counter;
  inputNumber.value = 0;
}

var inputNumber = document.getElementById('input-number');
inputNumber.value = increment;
inputNumber.addEventListener('input', handleInput);
function handleInput(event) {
  //console.log(event.target.value);
  //console.log(typeof event.target.value);
  //console.log(typeof parseInt(event.target.value));
  increment = parseInt(event.target.value);
}
