window.addEventListener("load", main);

let time = 5;
let score = 0;
let isplaying;
// global varialbles
const input = document.getElementById("word-input");
const timeCount = document.getElementById("time");
const scorecount = document.getElementById("score");
const currentWord = document.getElementById("current-word");
const over = document.getElementById("over");

const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
  "shivam",
  "rajpal",
  "empire",
  "goals",
  "minister",
  "billionaire",
  "canada",
  "india",
];

function main() {
  // to show random words on refresh
  showWord(words);
  //   to check the input word matches with current word
  input.addEventListener("input", checkMatch);
  //   countdown time
  setInterval(countdown, 1000);
  //   status
  setInterval(checkStatus, 50);
}

function showWord(words) {
  // generating random index
  const randmindex = Math.floor(Math.random() * words.length);
  //   genrating random word by using index
  currentWord.innerHTML = words[randmindex];
}
function checkMatch() {
  if (matched()) {
    isplaying = true;
    time = 6;
    input.value = "";
    showWord(words);
    console.log("working");
    score++;
  }
  if (score === -1) {
    scorecount.innerHTML = 0;
  } else {
    scorecount.innerHTML = score;
  }
}
function matched() {
  if (input.value === currentWord.innerHTML) {
    over.innerHTML = "Correct!!!";
    return true;
  } else {
    over.innerHTML = "";
    return false;
  }
}
function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isplaying = false;
  }
  timeCount.innerHTML = time;
}

function checkStatus() {
  if (!isplaying & (time === 0)) {
    over.innerHTML = "Game Over!!!";
    score = -1;
  }
}
