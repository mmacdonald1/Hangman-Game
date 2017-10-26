//Global variables=========================================
var dogName = [];
var randomDog;
var userGuess;
var wrongArray = [];
var indexValue;
var match;
var dogLengthArray = [];
var indexArray= [];



// DOM manipulations=======================
var score = document.getElementById("score");
var winCount = 0;
var remaining = document.getElementById("remaining");
var remainingCount = 10;

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
    
     console.log(randomIndex);
     console.log(randomDog);
    
     return randomDog;
   
},

 letterArray: function(){
    var res = randomDog.split("");    

    console.log(res);
      
    return res;
},
           

            
    answerArray: function(){      
     for (let i = 0; i < game.letterArray().length; i++ ) {

         dogLengthArray.push("_ ");
     }
    console.log("WOOO", dogLengthArray);
    },


    handlesKeyPress: function(){
        document.onkeyup = function(event) {
          var userGuess = event.key.toUpperCase(); 
            console.log(userGuess);
        
//        for (var i=0, i < game.letterArray.length, i++){
//            letterIndexArray = game.letterArray().indexOf(userGuess);
//            console.log(letterIndexArray);
//        return letterIndexArray;
//        }
            
        }
    },        
 
//// This function is run whenever the user presses a key.
//
//    document.onkeyup: function(event) {
//        
//// Determines which key was pressed.
//        
//        var userGuess = event.key.toUpperCase();
//        
//        //console.log(event.key);
//        console.log(dogLengthArray);
//        console.log(userGuess);
//        
////Index the answerArray ERROR HERE
//        
//        console.log('Letter array type: ', typeof letterArray());
//        console.log('Letter array: ', letterArray());
//    
//        for (var i=0, i< dogLengthArray.length, i++){
//        letterIndexArray = dogLengthArray().indexOf(userGuess);
//    
//        return letterIndexArray;
//        }
//       
//        console.log(letterIndexArray);
//        
////if else FIX INDEXVALUE
//            if (indexValue>0){
//              dogLengthArray[indexValue]= userGuess;
//              score.textContent = ++winCount;
//          } 
//            else if (indexValue=-1){
//                wrongArray.push(userGuess);
//                remaining.textContent = --remainingCount;
//            }
//                
//    },

};

//Calling
//document.onkeyup = game.handlesKeypress;

game.dogName();

game.letterArray();

game.answerArray();

game.handlesKeyPress();

//game.document.onkeyup();


