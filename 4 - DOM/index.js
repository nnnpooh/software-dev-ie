window.onload = () => {
  console.log('page is fully loaded');
};

window.console.dir(window);
console.dir(window.document);
console.dir(document);

// Inject content
document.getElementById('p1').innerHTML = 'My First JavaScript';

// Create element and inject into existing element
var para = document.createElement('p');
para.innerHTML = 'This is from javascript';
var element = document.getElementById('div1');
element.appendChild(para);

// Change inline style
document.getElementById('p1').style.color = 'red';

// Add CSS class
var element = document.getElementById('p2');
element.classList.add('colorful');

// Click event
document.getElementById('btn-alert').addEventListener('click', myScript);
function myScript() {
  alert('Clicked');
}

// Toggle class
var myScriptToggle = () => {
  const element = document.getElementById('div-toggle');
  console.dir(element);
  element.classList.toggle('toggle-style');
}; // Note that if I put this below it won't work (no hoisting).
document
  .getElementById('btn-toggle-class')
  .addEventListener('click', myScriptToggle);
