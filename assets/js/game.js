//Global variables=========================================
var dogName = [];
var randomDog;
var userGuess;
var wrongArray = [];
var indexValue;
var match;
var dogLengthArray = [];
var letterIndexArray= [];
var letterIndex;
var currentLetter;




// DOM manipulations=======================
var score = document.getElementById("score");
var winCount = 0;
var remaining = document.getElementById("remaining");
var remainingCount = 10;
var disword = document.getElementById("dis-word");
var disguess = document.getElementById("dis-guess");
var resetButton = document.getElementById("reset-button");


// Dog Array================================================
    "use strict";
      var dogArray = ["ROTTWEILER", "BEAGLE", "POODLE", "CHIHUAHUA", "DACHSHUND", "AKITA"];


//Main Object===============================

var game = {

//Randomizer
 dogName: function (){ 
    randomDog= "";
    var randomIndex = Math.floor(Math.random()* dogArray.length);
    randomDog = dogArray[randomIndex];
    
//     console.log(randomIndex);
//     console.log(randomDog);
    
     return randomDog;
   
},

 letterArray: function(){
    var res = randomDog.split("");    

//    console.log(res);
      
    return res;
},
           

            
    answerArray: function(){      
     for (let i = 0; i < game.letterArray().length; i++ ) {

         dogLengthArray.push("_ ");
     }
//    console.log("WOOO", dogLengthArray);
    disword.textContent = dogLengthArray;
    },

    
    
    handlesKeyPress: function(){
        document.onkeyup = function(event) {
          var userGuess = event.key.toUpperCase(); 
            console.log(userGuess);
            
             
            
         for (let i = 0; i < game.letterArray().length; i++ ) {
             currentLetter = game.letterArray()[i];
           if (currentLetter === userGuess) {
                dogLengthArray[i]=currentLetter;
                disword.textContent = dogLengthArray;
            } 
            if (currentLetter !== userGuess && i===game.letterArray().length-1) {
             
                if(wrongArray.includes(userGuess) === false){
                console.log('Not a matching char bruh, and your character is not in the aray.')
                wrongArray.push(userGuess);
                }   
            }
         }
            console.log('Wrong ARAAY #############', wrongArray);
            console.log(dogLengthArray);
            return dogLengthArray;    
         
        }
    },
};
             
//            else if (wrongArray.includes(userGuess)){}
//            
//            else{
//                wrongArray.push(userGuess);
//                console.log(wrongArray);
//                disguess.textContent= wrongArray;
//                remaining.textContent = --remainingCount;
//            }
//            console.log(wrongArray);
//            return wrongArray;
//         }
//        if (remainingCount === 0){
//            alert("GAME OVER");
//        }
//        
//        if ( dogLengthArray.join === randomDog){
//            score.textContent= ++scoreCount;
//        } 
    
//    reset: function(){
//      document.addEventListener("click");  
//        game.dogName();
//        remainingCount= 10;
//        wrongArray =[];
//    },




                             
//Calling
//document.onkeyup = game.handlesKeypress;

game.dogName();

game.letterArray();

game.answerArray();

game.handlesKeyPress();

//game.document.onkeyup();


