'use strict';


// get user info and store for later
function userName(){
var userName = prompt ('Can i have your name please?');
console.log('The Users Name is ' + userName);
return userName
};

// then assign the name to a variable to be used
var playerName = userName();

// welcome guest to page
alert('welcome ' + playerName);


// Start of guessing game
var gameScoreTotal = 0;
// score goes up one per correct answer and down one for each incorrect answer

// convert all user input to lowercase
function convertUserInput(userInput){
  if(userInput.toLowerCase() === 'yes' || userInput.toLowerCase() === 'y'){
    return 'yes';
  } else if(userInput.toLowerCase() === 'no' || userInput.toLowerCase() === 'n'){
    return 'no';
  } else {
      return null;
    }
  console.log('The player answered ' + convertUserInput())
}

// Question 1
function question1() {
  var convertedAnswer1 = null;
  while(convertedAnswer1 === null) {
    var answer1= prompt('Is the Sky blue?');
    convertedAnswer1 = convertUserInput(answer1);
  }
  if (convertedAnswer1 === 'yes'){
    answer1 = 'correct the sky is blue';
    console.log(answer1);
    gameScoreTotal++;
  } else if (convertedAnswer1 === 'no'){
    answer1 = 'Try again Next time';
    console.log(answer1);
    gameScoreTotal--;
  }
  console.log(playerName + ' answered ' + convertedAnswer1 + ' to Q1!');
  alert(`${answer1} , ${playerName} your score is now ${gameScoreTotal}`);
  return answer1;
}

// Question 2
function question2() {
  var convertedAnswer2 = null;
  while(convertedAnswer2 === null) {
    var answer2= prompt('Do wood chucks chuck wood?');
    convertedAnswer2 = convertUserInput(answer2);
  }
  if (convertedAnswer2 === 'yes'){
    answer2 = 'Sorry i dont think so';
    console.log(answer2);
    gameScoreTotal--;
  } else if (convertedAnswer2 === 'no'){
    answer2 = 'Nope, they dont your right';
    console.log(answer2);
    gameScoreTotal++;
  }
  console.log(playerName + ' answered ' + convertedAnswer2 + ' to Q2!');
  alert(`${answer2} , ${playerName} your score is now ${gameScoreTotal}`);
  return answer2;
}

// Question 3
function question3() {
  var convertedAnswer3 = null;
  while(convertedAnswer3 === null) {
    var answer3= prompt('Gravity works yes or no?');
    convertedAnswer3 = convertUserInput(answer3);
  }
  if (convertedAnswer3 === 'yes'){
    answer3 = 'Most of the time you are correct!';
    console.log(answer3);
    gameScoreTotal++;
  } else if (convertedAnswer3 === 'no'){
    answer3 = 'Not always no';
    console.log(answer3);
    gameScoreTotal--;
  }
  console.log(playerName + ' answered ' + convertedAnswer3 + ' to Q3!');
  alert(`${answer3}, ${playerName} your score is now ${gameScoreTotal}`);
  return answer3;
}

// Question 4
function question4() {
  var convertedAnswer4 = null;
  while(convertedAnswer4 === null) {
    var answer4= prompt('Will the Cyote ever catch The Road Runner?');
    convertedAnswer4 = convertUserInput(answer4);
  }
  if (convertedAnswer4 === 'yes'){
    answer4 = 'Not if he keeps using ACME products';
    console.log(answer4);
    gameScoreTotal--;
  } else if (convertedAnswer4 === 'no'){
    answer4 = 'You are absoultly Correct, That bird is too Fast';
    console.log(answer4);
    gameScoreTotal++;
  }
  console.log(playerName + ' answered ' + convertedAnswer4 + ' to Q4!');
  alert(`${answer4}, ${playerName} your score is now ${gameScoreTotal}`);
  return answer4;
}

// Question5
function question5() {
  var convertedAnswer5 = null;
  while(convertedAnswer5 === null) {
    var answer5= prompt('Is the world flat?');
    convertedAnswer5 = convertUserInput(answer5);
  }
  if (convertedAnswer5 === 'yes'){
    answer5 = 'No, Go READ A BOOK';
    console.log(answer5);
    gameScoreTotal--;
  } else if (convertedAnswer5 === 'no'){
    answer5 = 'YES, Thank you for having a brain';
    console.log(answer5);
    gameScoreTotal++;
  }
  console.log(playerName + ' answered ' + convertedAnswer5 + ' to Q5');
  alert(`${answer5}, ${playerName} your score is now ${gameScoreTotal}`);
  return answer5;
}



function question6() {
  for(var j = 6 ; j >= 0 ; j--){
    var foodArr = ['Lobster-Ravioli', 'Mac-and-Cheese', 'Apple-Pie', 'Shepards-Pie', 'Lava-Cakes', 'Beef-Ribs', 'Brusselsprouts', 'Key-Lime-Tarts', 'Stuffed-Mushrooms'];
    var answerArr = ['Apple-Pie', 'Mac-and-Cheese', 'Beef-Ribs'];
    
    // answer verify loop checks aginst is in food array     
      function verifyResponse(userInput){
          var input = true;
          while(input === true){
            for(var i=0; i < foodArr.length; i++){
              if(userInput === foodArr[i]){
                var input = userInput;
                console.log(`${userName} input accepted ${userInput}`);
                return [verifiedResponse];
              }else {
                console.log(`${userName} input not accepted try again!`)
              }
            }
          }
      };
      
      function firstAnswer(verifiedResponse){
        var foodItem1 = true;
        while(foodItem1 === true){
          for(var e = 0; e < answerArr.length; e++){
            if(verifiedResponse === answerArr[e]){
              var foodItem1 = verifiedResponse;
              console.log(`Yes ${foodItem1} belongs on my menu.`);
              return foodItem1;
            } else {
              var foodItem1 = verifiedResponse;
              console.log(`No ${foodItem1} is not on my menu.`);
              return foodItem1;
            };
          };
        };
      };

      function secondAnswer(verifiedResponse){
        var foodItem2 = true;
        while(foodItem2 === true){
          for(var e = 0; e < answerArr.length; e++){
            if(verifiedResponse === answerArr[e]){
              var foodItem2 = verifiedResponse;
              console.log(`Yes ${foodItem2} belongs on my menu.`);
              return foodItem2;
            } else {
              var foodItem2 = verifiedResponse;
              console.log(`No ${foodItem2} is not on my menu.`);
              return foodItem2;
            };
          };
        };
      };

      function thirdAnswer(verifiedResponse){
        var foodItem3 = true;
        while(foodItem3 === true){
          for(var e = 0; e < answerArr.length; e++){
            if(verifiedResponse === answerArr[e]){
              var foodItem3 = verifiedResponse;
              console.log(`Yes ${foodItem1} belongs on my menu.`);
              return foodItem3;
            } else {
              var foodItem3 = verifiedResponse;
              console.log(`No ${foodItem1} is not on my menu.`);
              return foodItem1;
            };
          };
        };
      };
  
    }
  }




function numberGuesser() {
  var guessNum = Number(prompt('pick a number between 1 and 25'));
  var correctAnswer = Math.floor(Math.random() * 26);
  for (var i = 0; i < 3; i++) {
    if (guessNum === correctAnswer) {
    console.log('Wow you got it!');
    alert('thats right! Exactly');
    gameScoreTotal++;

    break;
    } else if (guessNum < correctAnswer) {
    console.log('Too low, try again.');
    gameScoreTotal--;
    alert('Too low, Try again.')
    guessNum = Number(prompt('pick a number between 1 and 25'));
    } else if (guessNum > correctAnswer) {
    console.log('Too high, try again.');
    gameScoreTotal--;
    alert('Too high, try again')
    guessNum = Number(prompt('pick a number between 1 and 25'));
    } else {
    console.log('Invalid response');
    alert('Invalid response');
    guessNum = Number(prompt('pick a number between 1 and 25'));
    }
  }
  alert('your out of trys thank you for playing')
  return guessNum;
}


    
    
// question1();
// question2();
// question3();
// question4();
// question5();
question6();
// numberGuesser();