var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var lettersGuessed = [];
var wrongGuesses = [];
var lettersoftheword = [];
var totalGuesses = 0;
var theword = "";
var numBlanks = 0;
var blanksandAnswers = [];
var wordList = ["snobby shores", "retail row", "tilted towers", "salty springs", "lonely lodge", "greesy grove", "pleasant park", "haunted hills", "junk junction", "anarchy acres", "moisty mire","loot lake", "lucky landing", "flush factory", "fatal fields", "dusty divot", "tomato town", "wailing woods", "risky reels"]

function startGame() {
    guessesRemaining = 9;
    theword = wordList[Math.floor(Math.random()*wordList.length)];
    lettersoftheword = theword.split("");
    numBlanks = lettersoftheword.length;
    console.log(theword);
    blanksandAnswers = [];
    
    for (var i = 0; i < numBlanks; i++) {
        blanksandAnswers.push("_");
    }
    
    console.log(blanksandAnswers);

};
