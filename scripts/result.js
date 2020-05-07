let correctScore = localStorage.getItem("recentScore");
let wrongScore = localStorage.getItem("wrongScore");
const total = document.querySelector('.totalScore');
const correct = document.querySelector('.correctScore');
const wrong = document.querySelector('.wrongScore');

total.innerText = correctScore;
correct.innerText = correctScore;
wrong.innerText = wrongScore;