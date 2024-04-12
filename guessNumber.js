let randNum = parseInt(Math.floor(Math.random() * 100));
let input = document.querySelector("#inp");
let subButton = document.querySelector("#sub");
let prevGuesses = document.querySelector(".prev");
let remainingChances = document.querySelector(".rem");
let display = document.querySelector(".disp");
let playAgain = document.querySelector(".again");

allGuess = [];
chances = 10;

subButton.addEventListener("click", (e) => {
  e.preventDefault();
  const userInp = parseInt(input.value);
  chkInp(userInp);
});

function chkInp(inp) {
  if (isNaN(inp) || inp > 100 || inp < 0) {
    alert("Please enter a valid input!");
    input.value = "";
  } else {
    if (chances >= 1) {
      allGuess.push(inp);
      validation(inp);
      dispGuess(inp);
    } else {
      endGame();
    }
  }
}
function validation(i) {
  if (i === randNum) {
    displayMessage(
      `Congratulations You guessed it right. Random number was ${randNum}`
    );
  } else if (i > randNum) {
    displayMessage(`Enter a smaller number.`);
  } else if (i < randNum) {
    displayMessage(`Enter a larger number.`);
  }
}

function dispGuess(e) {
  input.value = "";
  prevGuesses.innerHTML = allGuess;
  chances--;
  remainingChances.innerHTML = chances;
}

function displayMessage(message) {
  display.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  if (chances < 1) {
    input.value = "";
    input.setAttribute("disabled", "");
    display.innerHTML = `<h3>All of your chances are over. Random Number was ${randNum}.</h3>`;
  }
}

playAgain.addEventListener("click", (e) => {
  restart();
});

function restart() {
  allGuess = [];
  input.value = "";
  prevGuesses.innerHTML = allGuess;
  chances = 10;
  remainingChances.innerHTML = chances;
  display.innerHTML = "";
  newRand = parseInt(Math.floor(Math.random() * 100));
  randNum = newRand;
  input.removeAttribute("disabled");
}
