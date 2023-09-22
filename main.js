const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

const likeGlyph = document.querySelector('.like-glyph');
const modal = document.querySelector('.modal');
const errorMessage = document.querySelector('.error-message');

likeGlyph.addEventListener("click", () => {
  mimicServerCall()
    .then(() => {
      likeGlyph.innerHTML = FULL_HEART;
      likeGlyph.classList.add('activated-heart');
    })
    .catch((error) => {
      errorMessage.textContent = error;
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 3000);
    });
});

likeGlyph.addEventListener("click", () => {
  if (likeGlyph.classList.contains('activated-heart')) {
    likeGlyph.innerHTML = EMPTY_HEART;
    likeGlyph.classList.remove('activated-heart');
  }
});

// Don't change the code below: this function mocks the server response
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
