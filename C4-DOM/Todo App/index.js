//State variables
var inputText = '';
var data = [];

var inputElement = document.getElementById('input-text');
var addButton = document.getElementById('btn-add');
var listElement = document.getElementById('todo-list');

inputElement.addEventListener('input', handleInput);
function handleInput(e) {
  //console.log(e.target.value);
  inputText = e.target.value;
}

addButton.addEventListener('click', handleClick);
function handleClick() {
  if (inputText !== '') {
    data.push(inputText);
    //console.log(data);
    renderList();
    //console.log(inputText);
    inputElement.value = '';
    inputText = '';
  }
}

function renderList() {
  while (listElement.firstChild) {
    listElement.removeChild(listElement.lastChild);
  }

  for (var i = 0; i < data.length; i++) {
    var itemElement = document.createElement('li');
    itemElement.innerHTML = data[i];
    listElement.appendChild(itemElement);
  }
}
