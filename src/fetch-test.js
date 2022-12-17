// import './style.css'
// // явный return
// // const getItemTemplate = ({objectID, title, url}) => {
// //     return ` <li class="news-items" data-id="${objectID}">
// //     <a href="${url} target="_blank">${title}</a>
// //   </li>`};

//   const getItemTemplate = ({objectID, title, url}) => 
//     ` <li class="news-items" data-id="${objectID}">
//     <a href="${url} target="_blank">${title}</a>
//   </li>`;

// const URL = 'https://hn.algolia.com/api/v1/search'

// const refs = {
//     form: document.querySelector('.news-form'),
//     list: document.querySelector('.news-list'),
//     submitButton: document.querySelector('.news-submit'),
//     loader: document.querySelector('.news-loader'),
// }

// let items = [];

// const render = () => {
//     //  const list = items.map((item) => {
//     //     //  console.log(item)
//     //      getItemTemplate(item)})
//    const list = items.map(getItemTemplate);
//     //  console.log(items);
//     //  console.log(list);
//      refs.list.innerHTML = '';
//      refs.list.insertAdjacentHTML('beforeend', list.join(''));
// }

// const showLoader = () => {
//     refs.loader.classList.add('show')
// };

// const hideLoader = () => {
//     refs.loader.classList.remove('show')
// };

// const lockForm = () => {
//     refs.submitButton.setAttribute('disabled', true);
// }

// const unlockForm = () => {
//     refs.submitButton.removeAttribute('disabled');
// }

// const hendeleSabmit = (e) => {
//     const {value} = e.target.elements.query;
//     // const value = e.target.elements.query.value;
//     // console.log(value);

//     showLoader();
//     lockForm();

//     fetch(`${URL}?query=${value}`)
//     .then(resp => resp.json())
//     .then(({hits}) => {
//         // console.log(hits);
//         items = hits;
//         render();
//     })
//     .finally(() => {
//         hideLoader();
//         unlockForm();
//     })
// e.preventDefault();
// };

// refs.form.addEventListener('submit', hendeleSabmit);
