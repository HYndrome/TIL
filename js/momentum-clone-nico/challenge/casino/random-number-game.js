const numberInput = document.querySelector("#input-number");
const guessNumberInput = document.querySelector("#guess-number");
const guessNumberSumit = document.querySelector("#guess-number-submit");

function guessNumberClickHandler() {
  // console.dir(inputNumber.value);
  const numberRange = parseInt(numberInput.value) + 1;
  const guessNumber = parseInt(guessNumberInput.value);
  // Math.random()
  // Math.random() 함수는 0 이상 1 미만의 구간에서 근사적으로 균일한(approximately uniform) 부동소숫점 의사난수를 반환
  const randomNumber = Math.floor(Math.random() * numberRange);
  let gameResult;
  if (guessNumber === randomNumber) {
    gameResult = true;
  } else {
    gameResult = false;
  }
  document.querySelector("#my-number").innerText = guessNumber;
  document.querySelector("#random-number").innerText = randomNumber;
  // Conditional (ternary) operator
  // condition ? exprIfTrue : exprIfFalse
  document.querySelector("#game-result").innerText = gameResult
    ? "You Won!"
    : "You Lose!";
}
guessNumberSumit.addEventListener("click", guessNumberClickHandler);
