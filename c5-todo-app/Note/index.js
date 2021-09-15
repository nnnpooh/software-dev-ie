let data = [];
let inputText = '';

const listElement = document.getElementById('todo-list');
const inputElement = document.getElementById('todo-input');
const btnElement = document.getElementById('todo-btn');

inputElement.addEventListener('input', (e) => {
  inputText = e.target.value;
});

inputElement.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addData();
  }
});
btnElement.addEventListener('click', addData);

function addData() {
  if (inputText) {
    data.push({
      title: inputText,
      id: Math.floor(Math.random() * 10000),
      active: true,
    });
    inputElement.value = '';
    inputText = '';
    renderList();
  }
}

function renderList() {
  while (listElement.firstChild) {
    listElement.removeChild(listElement.lastChild);
  }

  data.forEach((el) => {
    const itemElement = document.createElement('li');
    const textClass = el.active ? 'active' : 'inactive';
    const textElement = document.createElement('div');
    const delElement = document.createElement('div');
    textElement.classList.add(textClass);
    textElement.innerHTML = el.title;
    delElement.classList.add('delete-btn');
    delElement.innerHTML = 'x';
    itemElement.appendChild(textElement);
    itemElement.appendChild(delElement);
    listElement.appendChild(itemElement);

    textElement.addEventListener('click', (e) => {
      toggleActive(el.id);
    });

    delElement.addEventListener('click', () => {
      deleteItem(el.id);
    });
  });
}

function toggleActive(id) {
  const idx = data.findIndex((el) => el.id == id);
  console.log(id, idx);
  if (idx > -1) {
    data[idx] = { ...data[idx], active: !data[idx].active };
  }
  renderList();
}

function deleteItem(id) {
  data = data.filter((el) => el.id != id);
  renderList();
}
