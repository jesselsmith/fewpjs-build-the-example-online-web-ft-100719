// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".like-glyph").forEach((likeButton) => {
    likeButton.addEventListener("click", (e) => {
      mimicServerCall().then(() => changeHeart(e.target)).catch((error) => {
        modal = document.getElementById("modal");
        modal.classList.remove("hidden");
        modal.textContent = error;
        setTimeout(() => {
          modal.classList.add("hidden");
        }, 5000);
      })

    })
  })
});


function changeHeart(node) {
  if (node.classList.contains("activated-heart")) {
    node.classList.remove("activated-heart");
    node.textContent = EMPTY_HEART;
  } else {
    node.classList.add("activated-heart");
    node.textContent = FULL_HEART;
  }
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
