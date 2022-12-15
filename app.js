const randomAdvice = 'https://api.adviceslip.com/advice';
const adviceID = document.querySelector('#advice-id');
const adviceText = document.querySelector('#advice-text');
const nextBtn = document.querySelector('#next');

nextBtn.addEventListener('click', loadRandomAdvice);

function loadRandomAdvice() {
  fetch(randomAdvice)
    .then((res) => res.json())
    .then((json) => {
      adviceID.innerText = 'ADVICE #' + json.slip.id;
      adviceText.innerText = '"' + json.slip.advice + '"';
    })
    .catch((err) => console.error(`Fetch problem: ${err.message}`));
}

loadRandomAdvice();
