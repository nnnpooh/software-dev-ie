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
    active: true,
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
    const textClass = el.active ? 'active' : 'inactive';
    itemElement.setAttribute('id', el.id);
    itemElement.innerHTML = `<span id="text-${el.id}" class=${textClass}>${el.title}</span> <span id="del-${el.id}" class="delete-btn">x</span>`;
    listElement.appendChild(itemElement);
  });
}
