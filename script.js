// 'use strict'

// declearing variable

let newgame = document.querySelector('#newgame');
let leftplayer = document.getElementById('leftbox');
let rightplayer = document.getElementById('rightbox');
let finalscore1 = document.getElementById('finalscore1');
let finalscore2 = document.getElementById('finalscore2');
const image = document.getElementById('image');
let current1 = document.getElementById('score1');
let current2 = document.getElementById('score2');
let roll = document.querySelector('.roll');
let hold = document.querySelector('.hold');
let activeplayer = 1;
let score = 0;
let mainscore1 = 0;
let mainscore2 = 0;
let fun = function(){
    current1.textContent = 0;
    current2.textContent = 0;
    activeplayer = 1;
    finalscore1.textContent = 0;
    finalscore2.textContent = 0;
    image.classList.add('hidden');
    document.querySelector('#player2').textContent = 'Player 2'; 
    document.querySelector('#player1').textContent = 'Player 1'; 
    document.querySelector('body').classList.remove('green');
    leftplayer.style.backgroundColor = 'black';
    mainscore1 = 0;
    mainscore2 = 0;
}

// now adding event listener for roll

roll.addEventListener('click',
function(){
    // let score = 0;
    let number = Math.trunc(Math.random()*6)+1;
    image.classList.remove('hidden');
    image.src = `./image/dice-${number}.png`;
    if(number!=1){
        score += number;
        document.querySelector(`#score${activeplayer}`).textContent = score;
        // current1.textContent = score;
        
        
    }
    else{
        score = 0;
        document.querySelector(`#score${activeplayer}`).textContent = 0;
        activeplayer = activeplayer === 1 ? 2 : 1;
    }
    
})

// now adding event listener of hold

hold.addEventListener('click', function(){
    if(activeplayer == 1){
        mainscore1 += score;
        finalscore1.textContent = mainscore1;
        score = 0; 
        activeplayer = 2;
        current1.textContent = 0;
        if(mainscore1>=50){
            document.querySelector('#player1').textContent = 'Player 1 is a winner'; 
            document.querySelector('body').classList.add('green');
            
            current1.textContent = 0;
            current2.textContent = 0;
            activeplayer = 1;
            finalscore1.textContent = 0;
            finalscore2.textContent = 0;
            image.classList.add('hidden');
            leftplayer.style.backgroundColor = 'green';
            
            
        }
        
        
    }
    else{
        mainscore2 += score;
        finalscore2.textContent = mainscore2;
        score = 0;
        activeplayer = 1;
        current2.textContent = 0;
        if(mainscore2>=50){
            document.querySelector('#player2').textContent = 'Player 2 is a winner'; 
            document.querySelector('body').classList.add('green');
            current1.textContent = 0;
            current2.textContent = 0;
            activeplayer = 1;
            finalscore1.textContent = 0;
            finalscore2.textContent = 0;
            image.classList.add('hidden');
            leftplayer.style.backgroundColor = 'green';
        
        }
        
        // rightplayer.classList.add('activeplayer');
        // rightplayer.classList.remove('rightbox');
        // // leftplayer.classList.add('nonactiveplayer');
    }

})
// for event of newgame

newgame.addEventListener('click',fun)