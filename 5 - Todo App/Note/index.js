let data = [];
let inputText = '';

const listElement = document.getElementById('todo-list');
const inputElement = document.getElementById('todo-input');
const btnElement = document.getElementById('todo-btn');

inputElement.addEventListener('input', (e) => {
  inputText = e.target.value;
});

btnElement.addEventListener('click', () => {
  data.push({
    title: inputText,
    id: Math.floor(Math.random() * 10000),
  });
  inputElement.value = '';
  renderList();
});

function renderList() {
  while (listElement.firstChild) {
    listElement.removeChild(listElement.lastChild);
  }

  data.forEach((el) => {
    const itemElement = document.createElement('li');
    itemElement.setAttribute('id', el.id);
    itemElement.innerHTML = el.title;
    listElement.appendChild(itemElement);
  });
}
