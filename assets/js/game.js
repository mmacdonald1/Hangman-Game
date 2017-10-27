//Global variables=========================================
var dogName = [];
var randomDog;
var userGuess;
var wrongArray = [];
var dogLengthArray = [];
var letterIndexArray= [];
    





// DOM manipulations=======================
var score = document.getElementById("score");
var winCount = 0;
var remaining = document.getElementById("remaining");
var remainingCount = 10;
var disword = document.getElementById("dis-word");
var disguess = document.getElementById("dis-guess");



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
     console.log(randomDog);
    
     return randomDog;
   
},

 letterArray: function(){
    var res = randomDog.split("");    

//    console.log(res);
      
    return res;
},
           

            
    answerArray: function(){ 
        dogLengthArray=[];
     for (let i = 0; i < game.letterArray().length; i++ ) {

         dogLengthArray.push("_ ");
     }
    console.log("WOOO", dogLengthArray);
    disword.textContent = dogLengthArray.join('');
    },
    
    //for loop with a generator we learned today to get commas out

    
    
    handlesKeyPress: function(){
        document.onkeyup = function(event) {
          var userGuess = event.key.toUpperCase(); 
            console.log(userGuess);
            

            
            if (game.letterArray().includes(userGuess)){
                console.log('correct')
                
                for(var i = 0; i < game.letterArray().length; i++){
                if(userGuess === game.letterArray()[i]){
                   dogLengthArray[i] = userGuess;
                }
                disword.textContent = dogLengthArray.join('');
                console.log(dogLengthArray);
                }
            }
            else if (wrongArray.includes(userGuess)) {
			}
            else{
                 console.log('incorrect')
                wrongArray.push(userGuess);
                disguess.textContent= wrongArray;
                remaining.textContent = --remainingCount;
            }
              if (remainingCount === 0){
            alert("GAME OVER");
            game.reset();
            game.new();
            }
             if ( dogLengthArray.join('') === randomDog){
            score.textContent= ++winCount;
            alert("YOU WIN!");
            game.reset();
            game.new();
            } 
            console.log(dogLengthArray.join(''));
            console.log(randomDog);
        }

            },
            
        reset: function(){ 
        var dogName = [];
        var randomDog;
        var userGuess;
        var wrongArray = [];
        var dogLengthArray = [];
        var letterIndexArray= [];
        var remainingCount = 10;
        disword.textContent = "no word";
        remainingCount= 10;
        remaining.textContent = remainingCount;
        disguess.textContent= wrongArray;
         
    },
    
     new: function(){
            game.dogName();

            game.letterArray();

            game.answerArray();

            game.handlesKeyPress();
        },
        };
            
   
//        
       
    
   




                             
//Calling
//document.onkeyup = game.handlesKeypress;

game.dogName();

game.letterArray();

game.answerArray();

game.handlesKeyPress();




