let playerScore = 0;
let computerScore = 0;
let round = 1;

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    updateScore(result);
    updateRound();
    displayResult(playerChoice, computerChoice, result);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function updateScore(result) {
    if (result === 'player') {
        playerScore++;
    } else if (result === 'computer') {
        computerScore++;
    }
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function updateRound() {
    round++;
    document.getElementById('round').textContent = round;
}

function displayResult(playerChoice, computerChoice, result) {
    document.getElementById('player-choice').textContent = playerChoice;
    document.getElementById('computer-choice').textContent = computerChoice;

    const roundResult = document.getElementById('round-result');
    if (result === 'draw') {
        roundResult.textContent = "It's a Draw!";
    } else if (result === 'player') {
        roundResult.textContent = "You Win!";
    } else {
        roundResult.textContent = "You Lose!";
    }

    updateImage('player', playerChoice);
    updateImage('computer', computerChoice);
}

function updateImage(playerType, choice) {
    const imageUrl = {
        rock: 'https://img.icons8.com/ios/452/rock.png',
        paper: 'https://img.icons8.com/ios/452/paper.png',
        scissors: 'https://img.icons8.com/ios/452/scissors.png'
    };

    const imgElement = document.getElementById(playerType + '-img');
    imgElement.src = imageUrl[choice];

    // Add shaking animation for the result images
    imgElement.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        imgElement.style.animation = ''; // Reset the animation
    }, 500);
}
