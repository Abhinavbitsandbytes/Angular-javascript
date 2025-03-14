const randomWordEl = document.querySelector('#random-word');
const inputWordEl = document.querySelector('#input-word');
const timeLeftEl = document.querySelector('#time-left');
const scoreEl = document.querySelector('#score');
const difficultyEl = document.querySelector('#difficulty');

const words = ['ab', 'cd', 'efg', 'hij','klm', 'nop', 'qrs','tuv'];
let score = 0;
let time = 10;
let difficulty='low';

const timeInterval = setInterval(updateTime, 1000);

function updateTime() {
  time--;
timeLeftEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();

  } 
}
function gameOver(){
alert('gameover');
}

function populateRandomWord(){
  const randomIndex =  Math.floor(Math.random()*100%words.length);
  randomWordEl.innerHTML = words[randomIndex]; 

}

function updateScore(){
score++;
scoreEl.innerHTML=score
}


// Event listeners start

inputWordEl.addEventListener('input', e =>{
    console.log('jj', randomWordEl)
    if(e.target.value === randomWordEl.innerHTML){
        populateRandomWord();
        e.target.value='';
        updateScore();
      if (difficulty === 'low') {
        time += 5;
      }
      else if (difficulty === 'medium') {
        time += 15;
      }
      else if (difficulty === 'hard') {
        time += 30;
      }
      updateTime();
    }
})

difficultyEl.addEventListener('change', e =>{
  difficulty = e.target.value;
 
})

// Event Listeners End

populateRandomWord()