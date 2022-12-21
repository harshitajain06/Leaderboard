// import _ from 'lodash';
import './index.css';

import TitleAuthor from './modules/book.js';

const show = new TitleAuthor();
show.showBook();

const refresh = document.querySelector('.refresh');
const form1 = document.querySelector('#form');
const title = document.getElementById('title');
const author = document.getElementById('author');

form1.addEventListener('submit', async (e) => {
  e.preventDefault();

  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jbTieK4n0oQxfEdI3QKa/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: title.value,
      score: author.value,
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  window.location.reload();
});

refresh.addEventListener('click', () => {
  window.location.reload();
});