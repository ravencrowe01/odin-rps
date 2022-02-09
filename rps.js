function main(){
    let input = prompt("Would you like to play a game (Y/n)?")

    if(input === "Y" || input === "y"){
        play();
    }
    else {
        console.log("You're no fun! :(");
    }

    return 0;
}

function play() {
    let playerWin = 0;
    let cpuWin = 0;
    let firstLoop = true;

    console.log("Wonderful! We're playing Rock-Paper-Scissors.");

    let running = true;

    while(running){
        console.log(`Score: ${playerWin}-${cpuWin}`)
        let input = parseInt(prompt("Rock(1), Paper(2), Scissors(3), or quit(4)?"));

        if(isNaN(input)){
            console.log("Your choices are 1, 2, 3, 4.");
            continue;
        }

        if(input === 4){
            if(firstLoop){
                console.log("Quiting before the first throw, smh. :|");
                break;
            }
            
            console.log("Bye-bye!");
            break;
        }

        firstLoop = false;

        let cpuChoice = Math.floor(Math.random() * 3) + 1;

        let choiceString = cpuChoice === 1 ? "rock" : cpuChoice === 2 ? "paper" : "scissors";

        console.log(`I choose ${choiceString}!`);

        if(input === cpuChoice) {
            console.log("Tie game!");
        }
        else {
            if(input === 1){
                if(cpuChoice === 2) {
                    console.log("I win!")
                    cpuWin++;
                }
                else {
                    console.log("You win...")
                    playerWin++;
                }
            }
            else if(input === 2){
                if(cpuChoice === 1){
                    console.log("You win...")
                    playerWin++;
                }
                else {
                    console.log("I win!")
                    cpuWin++;
                }
            }
            else {
                if(cpuChoice === 1){
                    console.log("I win!");
                    cpuWin++;
                }
                else {
                    console.log("You win...")
                    playerWin++;
                }
            }
        }
    }
}