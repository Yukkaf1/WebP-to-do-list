
import {v4} from 'uuid';
import * as basicLightbox from 'basiclightbox';
import _ from 'lodash';
import './style.css';
import printMe from './print.js';


import {getItemTemplate} from './getItemTemplate.js';
import {items as importedItems } from './items.js'

let items = importedItems;

const modal = basicLightbox.create(`
    <div class="modal">
        <p class="modal-text">
        </p>
        <img class="modal-img" src="" />
        <button>Close</buton>
    </div>
`)
console.log(modal);

const refs = {
    list: document.querySelector('.list'),
    form: document.querySelector('.form'),
    modalButton: modal.element().querySelector('button'),
    modalText: modal.element().querySelector('.modal-text'),
    // modalImg: modal.element().querySelector('.modal-img'),

  };
console.log(refs.modalText);

const render = () => {
  // const lis = items.map((item) => Item(item));

const lis = items.map(item => getItemTemplate(item));

  refs.list.innerHTML = ''; // удаляет из DOM
  refs.list.insertAdjacentHTML('beforeend', lis.join(''));
  
};

// ==================== ДЛИННО ПОНЯТНО

// const addItem =  (e) => {
//   e.preventDefault();
  
//   const {value} = e.target.elements.text
//   const payload = {
//     text: value,
//     isDone: false,
//   }
  
//   refs.form.reset();
//   items.push(payload);
//   render();
//   };

// render();

// refs.form.addEventListener('submit', addItem);

// ================== КОРОЧЕ ЧИЩЕ


const addItem =  (text) => {  
 
  const payload = {
    id: v4(),
    text,
    isDone: false,
    created: new Date(),
  }
  
  items.push(payload);
  };

const handleSubmit = (e) => {
  // варианты деструктуризации
  // const value = e.target.elements.text.value //просто напрямую
  
  // const {
  //   text: {value},
  // } = e.target.element; // двойная деструктуризация - плохо

  const {value} = e.target.elements.text

  e.preventDefault();
  addItem (value);
  render();
  refs.form.reset(); // чистим форму
};

const toggleItem = (id) => {
items = items.map(item => item.id === id 
  ? {
  ...item,
  isDone: !item.isDone,
}
: item);

console.log('toggle', id);
console.table(items);
};

const viewItem = (id) => {
console.log('view', id)

const {created} = items.find(item => item.id === id)

refs.modalText.textContent = created;
// refs.modalImg.src = '';
modal.show();
};

const deleteItem = (id) => {
console.log('delete', id)
items = items.filter(item => item.id !== id);
render();
};

const handleListClick = (e) => {
 

// проверка когда пользователь попал в молоко (попал сам на себя)
if (e.target === e.currentTraget) return;

const parent = e.target.closest('li');
const {id} = parent.dataset; // деструктуризация 
const {action} = e.target.dataset;

switch (action) {
  case 'toggle':
    toggleItem(id);
    break;

  case 'view':
      viewItem(id);
      break;

  case 'delete':
    deleteItem(id);
    break;
}

// console.log(e.target);
// console.log(e.currentTarget);
// console.log(parent.dataset.id);
// console.log(id);
// console.log(action);
};

render();


// add event Listener
refs.form.addEventListener('submit', handleSubmit);

refs.list.addEventListener('click', handleListClick)

refs.modalButton.addEventListener('click', modal.close);


//  ============= модалка basicLightbox
// console.log(modal);
// setTimeout (() => {
// modal.close();}, 2000);
// console.log(modal.element().querySelector('button'));

// ======================= ССЫЛКА РУКАМИ
// const link = document.createElement('a');
// link.href ='https://www.facebook.com/';
// link.textContent = 'Facebook';
// link.classList.add('link');

// const body = document.querySelector('body');
// body.appendChild(link);

// console.log(link.outerHTML);

// link.click();