

let cpuDecision = ["rock", "paper", "scissors"]

function random(cpuDecision) {
  return cpuDecision[Math.floor(Math.random() * cpuDecision.length)]
}


function use(playerChoice) {
  let cpuChoice = random(cpuDecision)

  if (playerChoice == cpuChoice) {
    return displayResults("tie", cpuChoice)
  } else if (playerChoice == "paper" && cpuChoice == "rock") {
    return displayResults("win", cpuChoice)
  } else if (playerChoice == "scissors" && cpuChoice == "rock") {
    return displayResults("lose", cpuChoice)
  } else if (playerChoice == "scissors" && cpuChoice == "paper") {
    return displayResults("win", cpuChoice)
  } else if (playerChoice == "rock" && cpuChoice == "paper") {
    return displayResults("lose", cpuChoice)
  } else if (playerChoice == "rock" && cpuChoice == "scissors") {
    return displayResults("win", cpuChoice)
  } else if (playerChoice == "paper" && cpuChoice == "scissors") {
    return displayResults("lose", cpuChoice)
  }

}


function displayResults(result, cpuChoice) {
  let resultElement = document.querySelector("#result")
  if (result == "win") {
    return resultElement.textContent = `I chose ${cpuChoice}... You Win!`
  } else if (result == "lose") {
    return resultElement.textContent = `I chose ${cpuChoice}! Git gud!!!`
  } else if (result == "tie") {
    return resultElement.textContent = `We both chose ${cpuChoice}... It's a tie.`
  }

}



