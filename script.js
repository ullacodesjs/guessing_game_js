"use strict";

//DOM Manipulation

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //all possible scenarios
  //when there is no number
  if (!guess) {
    document.querySelector(".message").textContent = "no number!";

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    //too low
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you loose :(";
      document.querySelector(".score").textContent = 0;
    }

    //too high
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you loose :(";
      document.querySelector(".score").textContent = 0;
    }
  }
});
