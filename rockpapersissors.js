const getUserChoice = userInput =>{
    userInput = UserInput.getUserChoice;
  }
  if (userInput === 'rock'||userInput === 'papper'||userInput === 'sissors'){
  return userInput;
  }else{
  console.log('Error!');
  }
  console.log(getUserChoice('paper'));
  console.log(getUserChoice('fork'))
  
  function getComputerChoice(){
   var randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors'
  }
}
  console.log(getComputerChoice());
  if (userChoice === computerChoice){
    return ' The game is a tie!'
  }
  if (userChoice === 'rock'){
    if(computerChoice === "paper"){
      return 'The computer won! You will get them next time'
    }else{
      return 'You won! Great job lets go home now'
    }
  }
  if (userChoice === 'paper'){
    if(computerChoice === "scissors"){
      return 'The computer won! You will get them next time'
    }else{
      return 'You won! Great job lets go home now'
    }
  }
  if (userChoice === 'scissors'){
    if(computerChoice === "rock"){
      return 'The computer won! You will get them next time'
    }else{
      return 'You won! Great job lets go home now'
    }
  }
  const playGame = () => {
    const userChoice = getUserChoice('scissors')
    const computerChoice = getComputerChoice()
    console.log('You threw:' + userChoice)
    console.log('The computer threw:' + computerChoice)
    }
   
  playGame();