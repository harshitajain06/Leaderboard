// import _ from 'lodash';
import './index.css';

import TitleAuthor from './modules/book.js';

const show = new TitleAuthor();
show.showBook();

const submit1 = document.querySelector('#submit_button');

submit1.addEventListener('click', () => {
  show.submit();
});
const removeElements = document.querySelectorAll('.remove');
removeElements.forEach((el) => {
  el.addEventListener('click', (e) => {
    const store = e.currentTarget.dataset;
    const str = store.id;

    show.remove(str);
    window.location.reload();
  });
});
