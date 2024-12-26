// let userScore = 0;
// let compScore = 0;


// const choices = document.querySelectorAll('.choice')

// const genCompChoice = () => {
//     const options = ['rock', 'paper', 'scissors'];
//    const randIdx =  Math.floor(Math.random()*3)
//    return options[randIdx];  
// }

// const drawGame = () => {
//     console.log('game was draw')
// }

// const showWinner = () => {
//     if(userWin){
//         console.log('You Win')
//     }else{
//         console.log('you lose')
//     }
// }

// const playGame = (userChoice) => {
//     console.log('user choice = ', userChoice)
//     const compChoice = genCompChoice();
//     console.log('Computer choice = ', compChoice)
//     if(userChoice === compChoice){
//         drawGame();
//     }else{
//         let userWin = true;
//         if  (userChoice === 'rock'){
//             userWin = compChoice === 'paper' ? false: true;
//         }else if(userChoice === 'paper') {
//            userWin= compChoice === 'scissors' ? false: true;
//         }else {
//             userWin= compChoice === 'rock' ? false: true;
//         }
//         showWinner(userWin);
//     }


// }
// choices.forEach((choice) => {
//        choice.addEventListener('click',  ()=> {
//         const userChoice = choice.getAttribute('id')
//         playGame(userChoice)
//     })
// })



let userScore = 0;
let compScore = 0;
let userWin = false; // Move userWin to a higher scope

const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = 'Game was draw. Play again'
    msg.style.backgroundColor = 'dodgerBlue'

}

const showWinner = (userWin, userChoice, compChoice) => { // Add userWin as a parameter
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green'
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = 'red'
    }
}

const playGame = (userChoice) => {
    console.log('user choice = ', userChoice)
    const compChoice = genCompChoice();
    console.log('Computer choice = ', compChoice)
    if (userChoice === compChoice) {
        drawGame();
    } else {
        userWin = true; // Update userWin here
        if (userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userWin = compChoice === 'scissors' ? false : true;
        } else {
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice); // Pass userWin as an argument
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id')
        playGame(userChoice)
    })
})