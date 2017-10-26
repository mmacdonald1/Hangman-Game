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
var indices = [];
var idx;




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
    
    //for loop with a generator we learned today to get commas out

    
    
    handlesKeyPress: function(){
        document.onkeyup = function(event) {
          var userGuess = event.key.toUpperCase(); 
            console.log(userGuess);
            
             
            // if(aaray.indexOf(guess) != -1){logic if it does
            if (game.letterArray().indexOf(userGuess) != -1){
                
                indices.push(idx);
                idx = game.letterArray().indexOf(userGuess, idx + 1);
                console.log(indices);
                    }
            currentLetter = game.letterArray()[i];
            if (game.letterArray().includes(userGuess)){
                console.log('correct')
                for(var i = 0; i < game.letterArray().length; i++){
                dogLengthArray[i]=currentLetter;
                disword.textContent = dogLengthArray;
                console.log(dogLengthArray);
                }
            }
            
            else if (wrongArray.includes(userGuess) === false){
                 console.log('incorrect')
                wrongArray.push(userGuess);
                disguess.textContent= wrongArray;
                remaining.textContent = --remainingCount;
            }
            
            }
            
            
            // Finding all the occurrences of an element
            // for loop for indicies to alter the game to show word
            // }else{ logic for doesn't exist
            // }
        },
        };
            
//         for (let i = 0; i < game.letterArray().length; i++ ) {
//             currentLetter = game.letterArray()[i];
//            console.log(currentLetter === userGuess)
//             
//             
//             
//           if (currentLetter === userGuess) {
//               console.log('correct')
//                dogLengthArray[i]=currentLetter;
//                disword.textContent = dogLengthArray;
//               return dogLengthArray;
//            } 
//            if (currentLetter !== userGuess) {
//               console.log('incorrect')
//             
//                if(wrongArray.includes(userGuess) === false){
//                console.log('Not a matching char bruh, and your character is not in the aray.')
//                wrongArray.push(userGuess);
//                disguess.textContent= wrongArray;
//                remaining.textContent = --remainingCount;
//                }   
//            }
//         }
//            console.log('Wrong ARAAY #############', wrongArray);
//            console.log(dogLengthArray);
////            return dogLengthArray;    
//         
//        }

             
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


