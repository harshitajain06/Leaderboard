class TitleAuthor {
  showBook = async () => {              // eslint-disable-line   
    const book = document.getElementById('display_card');
    const scores = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jbTieK4n0oQxfEdI3QKa/scores/');
    const res = await scores.json();
    const obj1 = JSON.stringify(res.result);
    const obj2 = JSON.parse(obj1);

    obj2.forEach((obj) => {
      book.innerHTML += `
    <div class= "card">
    ${obj.user}: ${obj.score}</br>
    </div>`;
    });
  };
}

export default TitleAuthor;