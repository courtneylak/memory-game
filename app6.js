/* The purpose of this web-based app is to allow the user
 * to be able to play a game of memory of which two
 * cards are chosen by the user and then flipped to see if they match;
 * with the least amount of flips or guesses in total. */ 


/* upon first card_click initiation, begin timer counter as global variable */

const time_counter = []

var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;
function countTimer() {
   ++totalSeconds;
   var hour = Math.floor(totalSeconds /3600);
   var minute = Math.floor((totalSeconds - hour*3600)/60);
   var seconds = totalSeconds - (hour*3600 + minute*60);

   document.getElementById('timer').innerHTML = minute + ' min : ' + seconds + ' sec';
};


/* initiate number of card clicks that player chooses, as a clicks counter as a global variable */

const card_clicks = [];

function increase() {
    document.getElementById('moves').textContent++;
};


/* star-score performance matrix (change style attribute of the stars from yellow to grey): */

function decrease() {
    if (document.getElementById('moves').textContent > 3) {
        const list = document.getElementsByClassName("stars")[0];
        list.getElementsByClassName("fa fa-star")[2].style.color = "grey"};
    if (document.getElementById('moves').textContent > 6) {
        const list = document.getElementsByClassName("stars")[0];
        list.getElementsByClassName("fa fa-star")[1].style.color = "grey"};
    if (document.getElementById('moves').textContent > 9) {
        const list = document.getElementsByClassName("stars")[0];
        list.getElementsByClassName("fa fa-star")[0].style.color = "grey"}; 
};

/* Create a {live, manipulatable} list {or array} that contains all {16 in total} of the cards */

const cards = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", 
    "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb",
    "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"];


/* Shuffle the list of cards using Udacity-provided "shuffle" method:
 Shuffle function from http://stackoverflow.com/a/2450976 */

function shuffle(cards) {
    var currentIndex = array.length, temporaryValue, randomIndex;
 
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
 
/* Loop through each card and create its own HTML; add  each card's HTML to the page; set up the event listener for a card.  
If a card is clicked: display the card's symbol (put this functionality in another function that you call from this one)*/ 
 

const displayShuffledCards = document.querySelectorAll('.card');

const openCards = [];

displayShuffledCards.forEach(function(card) {
    card.addEventListener('click', function(flip) {
        card.classList.add('open', 'show');
        increase();
        countTimer();
        decrease();
        winner();
    });
});

/*
*  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one) */

function compare () {
    if (openCards.getElementsByClassName("card")[0] === openCards.getElementsByClassName("card")[1])
    card.classList.add('match');
}

/*  - if the list already has another card, check to see if the two cards match

*if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one) */

/*if cards.textContent = true;
card.classList.add('open', 'show');

card.style.color = 'red'
/*

/* 
* 
* 
*    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
*    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)


+ if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one) */

function winner() {
    if (document.getElementById('moves').textContent > 16) {
    alert("Congratulations! You have successfully matched all 16 cards.")};
};

/* call the function to start the game

play_memory_game() */


/* Closing 'You're a Winner ~ Game Over' Alert Box. */




/* const resetButton = document.getElementsByClassName("restart")[0]; */

/*
resetButton.addEventListener('click', resetGame(evt) {

};

function resetGame (e) {
    initiate reshuffle all cards again;
};
    
list.getElementsByClassName("fa fa-repeat")[0].style.color = ; */


/* Responsive Design Properties ~ Screen Size Tiers

@media screen and (max-width: 500px) {
    
    .column1 {
    order: 1;
    }

    */


/*    game over vs. restart game functions */
