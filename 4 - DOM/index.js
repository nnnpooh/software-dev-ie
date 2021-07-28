window.onload = () => {
  console.log('page is fully loaded');
};

window.console.dir(window);
console.dir(window.document);
console.dir(document);

// Inject content
document.getElementById('p1').innerHTML = 'My First JavaScript';

// Create element
var para = document.createElement('p');
para.innerHTML = 'This is from javascript';

//
var element = document.getElementById('div1');
element.appendChild(para);

document.getElementById('p1').style.color = 'red';

document.getElementById('btn').addEventListener('click', myScript);

function myScript() {
  alert('Clicked');
}
