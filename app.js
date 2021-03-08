/*
1. player must guess a number between a min and max
2. player hets a certain amount of guesses
3. notify player of guesses remaining
4. notify the player of the correct answer if lose
5. let player choose toplay again
*/

// game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI elements
const game = document.querySelector('game'),
      minNum = document.querySelector('.min-num'),    
      maxNum = document.querySelector('.max-num'),    
      guessBtn = document.querySelector('#guess-btn'),    
      guessInput = document.querySelector('#guess-input'),    
      message = document.querySelector('.message');
      
// assing UI min and max
minNum.textContent = min;
maxNum.textContent = max;    

// listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // validate input
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    } 

    // check if won
    if(guess === winningNum){
        //GAME OVER - WON
        gameOver(true, `${winningNum} is correct, you win!`);
        
    } else {
        // wrong number
        guessesLeft -= 1;
        if(guessesLeft === 0){
            // game over - lost
            gameOver(false, `Game over! You lost - the correct number was ${winningNum}`);
        } else {
            // game continues - answer wrong
            // change border color
            guessInput.style.borderColor = 'red';
            //clear the input
            guessInput.value = '';
            // tell user ikts the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red');
        }
    }
    
})

// set message function
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

// function game over
function gameOver(won, msg) {

    let color;
    won === true ? color = 'green' : color = 'red';

    // disable input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = color;
    //set text color
    message.style.color = color;
    //set message
    setMessage(msg);
}