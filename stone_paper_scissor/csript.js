let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score")
const compScorePara= document.querySelector("#comp-score")


const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawGame = () => {
  console.log("game was draw");
  msg.innerText= "Match is draw"
  msg.style.backgroundColor = "blue"
};

const showWinner = (userWin , userChoice , compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore
    console.log("yow win");
    msg.innerText = `Yow win! ${userChoice} beats ${compChoice} `
    msg.style.backgroundColor = "green"
  } else {
    compScore++;
    compScorePara.innerText = compScore
    console.log("comp win");
    msg.innerText = `You lose! ${compChoice} beats ${userChoice}`
    msg.style.backgroundColor = "red"
  }
};

const playGame = (userChoice) => {
  console.log("user choice:", userChoice);
  // generate computer choice
  const compChoice = genCompChoice();
  console.log("comp choice:", compChoice);

  if (userChoice === compChoice) {
    // draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
        // paper , scissors
      compChoice === "paper" ? userWin = false : userWin = true;
    } else if (userChoice === "paper") {
        // rock , scissors
       compChoice === "scissors" ? userWin = false : userWin = true;
    } else {
        // rock , paper
       compChoice === "rock" ? userWin = false : userWin = true;
    }
    showWinner(userWin , userChoice , compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
