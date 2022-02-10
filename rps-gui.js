let playerScore = 0;
let cpuScore = 0;
let playing = true;

function buttonClicked (selected) {
    if(!playing) {
        return;
    }

    let player = parseInt(selected);
    let cpu = getCPUChoice();

    switch (player) {
        case 1:
            processRock(cpu);
            break;
        case 2:
            processPaper(cpu);
            break;
        case 3:
            processScissors(cpu);
            break;
    }

    if (playerScore === 5) {
        getAnnouncmentElement().textContent = "Looks like you win. :|";
        playing = false;
    }
    
    if(cpuScore === 5) {
        getAnnouncmentElement().textContent = "Of course I would win. :)";
        playing = false;
    }
}

function getCPUChoice () {
    return Math.floor(Math.random() * 3) + 1;
}

function processRock (cpu) {
    switch (cpu) {
        case 1:
            processTie("rock");
            break;
        case 2:
            processPlayerLose("paper");
            break;
        case 3:
            processPlayerWin("scissors");
            break;
    }
}

function processPaper (cpu) {
    switch (cpu) {
        case 1:
            processPlayerWin("rock");
            break;
        case 2:
            processTie("paper");
            break;
        case 3:
            processPlayerLose("scissors");
            break;
    }
}

function processScissors (cpu) {
    switch (cpu) {
        case 1:
            processPlayerLose("rock");
            break;
        case 2:
            processPlayerWin("paper");
            break;
        case 3:
            processTie("scissors");
            break;
    }
}

function processTie (cpu) {
    getAnnouncmentElement().textContent = `I chose ${cpu}! Tie game.`;
}

function processPlayerWin (cpu) {
    playerScore++;

    getPlayerScoreElement().textContent = playerScore;

    getAnnouncmentElement().textContent = `I chose ${cpu}! You win this round...`;
}

function processPlayerLose (cpu) {
    cpuScore++;

    getCPUScoreElement().textContent = cpuScore;

    getAnnouncmentElement().textContent = `I chose ${cpu}! Haha, I won the round!`;
}

function getAnnouncmentElement () {
    return document.querySelector("#announcment");
}

function getPlayerScoreElement () {
    return document.querySelector("#playerScore");
}

function getCPUScoreElement () {
    return document.querySelector("#cpuScore");
}