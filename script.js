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
    if (playerSelection =='paper') return computerSelection == 'rock'? 'player': 'computer';
    if (playerSelection == 'scissors') return computerSelection== 'paper'? 'player':'computer';
}

const game = () => {
    let cont = 5;
    let playerContador = 0;
    let computerContador = 0;
    while (cont >= 1) {
        const playerSelection = prompt('rock paper scissors');
        const computerSelection = computerPlay();
        const winner = playRound(playerSelection, computerSelection);
        if (winner !== 'tie') winner === 'computer' ? computerContador++ : playerContador++;
        cont--;
    }
}

game()