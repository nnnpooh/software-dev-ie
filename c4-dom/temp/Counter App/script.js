const incrementNumber = function (e) {
  //console.dir(e);
  number.textContent = parseInt(number.textContent) + 1;
};

const handleMouseOver = function (e) {
  number.style.color = 'red';
};

const handleMouseLeave = function (e) {
  number.style.color = 'black';
};

const number = document.getElementById('number');
const button = document.getElementById('button');

button.addEventListener('click', incrementNumber);
button.addEventListener('mouseover', handleMouseOver);
button.addEventListener('mouseleave', handleMouseLeave);

number.textContent = 2;
console.dir(number);
