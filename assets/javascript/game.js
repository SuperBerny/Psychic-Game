var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var guesses;
var wins = 0;
var losses = 0;
var randomLetter;
var lettersGuessed = document.getElementById("guessed");
var guessText = "";


function reset (){
  randomLetter = alphabet[(Math.floor(Math.random()*alphabet.length))];
  guesses = 10;
  guessText = "";
}
reset();

// this starts the game
document.onkeyup = function (event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuess);

  if (userGuess === randomLetter) {
    wins++;
    reset();
  //   (alert("Win: " + wins));
  } else {
      guesses--;
      // alert(("Guesses Left: " + guesses));
  } 
    if (guesses === 0) {
      losses++;
      reset();
      // alert("Losses: " + losses);
  }
  
  guessText = guessText +(guessText.length > 0 ? ', ' : '')+ userGuess;

  var html = "<p>Wins: " + wins + "</p>" +
              "<p>Losses: " + losses + "</p>" +
              "<p>Guesses Left: " + guesses + "</p>" +
              "<p>Letters Guessed: "+ guessText +"</p>";
              
  document.querySelector("#game").innerHTML = html;
}

