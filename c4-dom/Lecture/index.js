//console.log(window);
console.dir(window);
console.dir(window.document);
console.dir(document);

// Change Content
document.getElementById('p1').innerHTML = 'This is from JavaScript';

// Create element and inject into existing element
var para = document.createElement('p');
para.innerHTML = 'This is created from JavaScript';
document.getElementById('div1').appendChild(para);

// Change class
var element = document.getElementById('p2');
element.classList.add('colorful');

// Alert
var element = document.getElementById('btn-alert');
element.addEventListener('click', myScript);
function myScript() {
  alert('Alert');
  console.log('button clicked');
}

// Toggle class
var element = document.getElementById('btn-toggle-class');
element.addEventListener('click', toggleScript);
function toggleScript() {
  var elementP = document.getElementById('p-toggle');
  elementP.classList.toggle('toggle-style');
}

//Counter
var counter = 0;
var element = document.getElementById('btn-add');
element.addEventListener('click', addScript);
function addScript() {
  counter = counter + 1;
  //console.log(counter);
  var elementP = document.getElementById('p-counter');
  elementP.innerHTML = counter.toString();
}

// Input (change)
var text = '';
var element = document.getElementById('input-text');
element.addEventListener('input', inputScript);
function inputScript(event) {
  // console.dir(event.target.value);
  var elementP = document.getElementById('p-text');
  text = event.target.value;
  elementP.innerText = text;
}
