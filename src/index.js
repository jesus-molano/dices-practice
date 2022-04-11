const firstDice = document.querySelector("#firstDice");
const faceFirstDice = firstDice.querySelector(".face");
const buttonFirstDice = firstDice.querySelector("button");
const firstDiceRecordsBox = firstDice.querySelector(".history");
const firstDiceHistory = [];

const secondDice = document.querySelector("#secondDice");
const faceSecondDice = secondDice.querySelector(".face");
const buttonSecondDice = secondDice.querySelector("button");
const secondDiceRecordsBox = secondDice.querySelector(".history");
const secondDiceHistory = [];


const thirdDice = document.querySelector("#thirdDice");
const faceThirdDice = thirdDice.querySelector(".face");
const buttonThirdDice = thirdDice.querySelector("button");
const thirdDiceRecordsBox = thirdDice.querySelector(".history");
const thirdDiceHistory = [];


buttonFirstDice.addEventListener("click", ()=> rollDice(faceFirstDice, firstDiceHistory, firstDiceRecordsBox));
buttonSecondDice.addEventListener("click", ()=> rollDice(faceSecondDice, secondDiceHistory, secondDiceRecordsBox));
buttonThirdDice.addEventListener("click", ()=> rollDice(faceThirdDice, thirdDiceHistory, thirdDiceRecordsBox));



function rollDice(face, history, records) {
  let randomNum = Math.ceil(Math.random() * 6);
  face.innerHTML = randomNum;
  history.push(randomNum);
  records.innerHTML = history;
}