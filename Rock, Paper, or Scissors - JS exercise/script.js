const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  
  if (userInput === "rock" || userInput === "paper" || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
   console.log('Your input needs to be "rock", "paper", or "scissors"');
   return;
  }
}

// console.log(getUserChoice("scissors"))

const getComputerChoice = () => {
   let getNumber = Math.floor(Math.random() * 3);
  if(getNumber === 0) {
    return "rock";
  } else if (getNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb'){
    return 'User won!';
  }
  if (userChoice === computerChoice) {
    return "game was a tie";
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "The computer won!";
    } else {
      return "The user won!";
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "The computer won!";
    } else {
      return "The user won!";
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "The computer won!";
    } else {
      return "The user won!";
    }
  }
}


// let userChoice = getUserChoice('rock');
// let computerChoice = getComputerChoice();
// console.log(determineWinner(userChoice, computerChoice))

const playGame = () => {
  // let userInput = prompt('Choose rock, paper, or scissors:');
  let userChoice = getUserChoice('scissors');
    
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  
  return determineWinner(userChoice, computerChoice);
}

console.log(playGame());