"use strict";

//generate the random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let withdraw = 0.001;

//check function
function check(){
let guess = Number(document.querySelector('.guess').value); 
if(!guess){
  document.querySelector('.message').textContent = 'no number 📍';
}
else if(guess === secretNumber){
  document.querySelector('.message').textContent = 'hurray!! win 👏';
  document.querySelector('.secrete_number').textContent = secretNumber;
  document.querySelector('.image').classList.toggle('active');
  document.querySelector('body').classList.toggle('background');
  // document.querySelector('body').style.background = '#60b347';
  
  if(score > highScore){
    highScore = score;
    document.querySelector('.highScore_number').textContent = highScore;
  }
  withdraw++;
  parseFloat(Math.trunc(document.querySelector('.withdraw_amount').textContent = `$${withdraw}`));
}

else if(guess > secretNumber){
  if(score > 1){
    document.querySelector('.message').textContent = 'too high 🧨';
    score--;
    document.querySelector('.score_number').textContent = score;
  }
  else {
    document.querySelector('.message').textContent = 'you lost the game! 😯';
    document.querySelector('.score_number').textContent = 0;
  }
}
else if(guess < secretNumber){
  if(score > 1){
    document.querySelector('.message').textContent = 'too low 🥍🥍';
    score--;
    document.querySelector('.score_number').textContent = score;
  }
  else {
    document.querySelector('.message').textContent = 'you lost the game! 😯';
    document.querySelector('.score_number').textContent = 0;
  }
}
}

// again button
document.querySelector('.again_btn').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'start playing...';
  document.querySelector('.score_number').textContent = score;
  document.querySelector('.secrete_number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.image').classList.remove('active');
  document.querySelector('body').classList.remove('background');
});