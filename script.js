'use strict';

let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore=0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value; 
    
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!';
        
    } 
    else if (guess == number) {
        document.querySelector('.number').textContent = number;
        document.querySelector('.message').textContent = '🎉Correct Number!';
        
        document.querySelector('body').style.backgroundColor = "#60b347";

        document.querySelector('.number').style.width = '30rem';
        
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        
        
    }
    else if (guess > number) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈Too high!';
            score--;
            document.querySelector('.score').textContent = score;
            
        }
        else {
            document.querySelector('.message').textContent = '🔥You lost the game!';
            score--;
            document.querySelector('.score').textContent = 0;
        }
        
    }
    else if(guess < number){
        if (score > 1) {
            document.querySelector('.message').textContent = '📉Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '🔥You lost the game!';
            
            document.querySelector('.score').textContent = 0;
        }
    }

});

document.querySelector('.again').addEventListener('click', function () {
    
     score = '20';
     number = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';

     document.querySelector('.score').textContent = score;
     document.querySelector('.number').textContent = '?';
     document.querySelector('.guess').value = '';

    document.querySelector('.number').style.width = '15rem';
    
    document.querySelector('body').style.backgroundColor = "#222"; 
  
})

/*<button class="btn" type="button" onclick="window.location.reload()">
          Again 😱
        </button>*/
    