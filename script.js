const rockBtn = document.querySelector('.fa-hand-back-fist');
const paperBtn = document.querySelector('.fa-hand');
const scissorsBtn = document.querySelector('.fa-hand-scissors');
const playerHand = document.querySelector('#playerHand');
const computerHand = document.querySelector('#computerHand');
const playerScore = document.querySelector('#playerScore')
const computerScore = document.querySelector('#computerScore')

const computerPlay = () => {
    let computer = Math.ceil(Math.random() * 3)
    switch (computer) {
        case 1: return 'rock';
        case 2: return 'paper';
        case 3: return 'scissors';
    }
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection) return 'tie';
    if (playerSelection == 'rock') return computerSelection == 'scissors' ? 'player ' : 'computer';
    if (playerSelection == 'paper') return computerSelection == 'rock' ? 'player' : 'computer';
    if (playerSelection == 'scissors') return computerSelection == 'paper' ? 'player' : 'computer';
}

let playerContador = 0;
let computerContador = 0;

const addClassList = (selection) => {
    if (selection === 'rock') return "fa-hand-back-fist"
    if (selection === 'paper') return "fa-hand"
    if (selection === 'scissors') return "fa-hand-scissors"
}

const addClass = (playerSelection, computerSelection) => {
    let playerClassList = addClassList(playerSelection)
    let computerClassList = addClassList(computerSelection)
    playerHand.classList.add(playerClassList)
    computerHand.classList.add(computerClassList)
}


const play = (e) => {
    if (playerHand.classList[1]) playerHand.classList.toggle(playerHand.classList[1])
    if (computerHand.classList[1]) computerHand.classList.toggle(computerHand.classList[1])
    const playerSelection = e.target.dataset.key;
    const computerSelection = computerPlay();
    addClass(playerSelection, computerSelection)
    const winner = playRound(playerSelection, computerSelection);
    if (winner !== 'tie') winner === 'computer' ? computerContador++ : playerContador++;
    playerScore.innerText = 'player: ' + playerContador
    computerScore.innerText= ' computer :' + computerContador
}
rockBtn.addEventListener('click', play)
paperBtn.addEventListener('click', play)
scissorsBtn.addEventListener('click', play)