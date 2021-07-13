window.onload = (event) => {
  console.log('page is fully loaded');
  console.log(event);
};

document.getElementById('p1').innerHTML = 'My First JavaScript';

var para = document.createElement('p');
para.innerHTML = 'This is from javascript';
var element = document.getElementById('div1');
element.appendChild(para);

document.getElementById('p1').style.color = 'red';

document.getElementById('btn').addEventListener('click', myScript);

function myScript() {
  alert('Clicked');
}
