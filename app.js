userscore = 0;
compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#your-score")
const compscorepara = document.querySelector("#comp-score")

const genCompChoice = () => {
  const options = ["rock","paper","scissor"]
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
}

const drawGame = () => {
  msg.innerText = "Game was Draw"
  msg.style.backgroundcolor = "blue"
}

const showWinner = (userWin,userchoice,compChoice) => {
  if(userWin) {
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `you won Your ${userchoice} beats ${compChoice}`
    msg.style.backgroundColor = "green";
  }else{
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText = `you lose ${compChoice} beats ${userchoice}`
    msg.style.backgroundColor = "red";
  }
}

const playgame = (userchoice) => {
  const compChoice = genCompChoice();
if(userchoice === compChoice) {
  drawGame () 
 }else {
    let userWin = true;
    if (userchoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    }else if(userchoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    }else{
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userchoice,compChoice);
  }
}


  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userchoice = choice.getAttribute("id");
      playgame(userchoice)
  });
});
