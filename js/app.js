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
  var foodArr = ['Lobster-Ravioli', 'Mac-and-Cheese', 'Apple-Pie', 'Shepards-Pie', 'Lava-Cakes', 'Beef-Ribs', 'Brusselsprouts', 'Key-Lime-Tarts', 'Stuffed-Mushrooms'];
  var answerArr = ['Apple-Pie', 'Mac-and-Cheese', 'Beef-Ribs'];
  // answer verify loop checks aginst is in food array   
  function firstGuess(){
    var firstAnswer = null;
    while(firstAnswer === null){
      var firstAnswer = prompt(`What would be Item 1? Your options are : ${foodArr}`)
      for(var k = 0 ; k < foodArr.length ; k++){
      if (firstAnswer === foodArr[k]){
        var answerPass = "pass";
        
        // checks answer aginst answer array
        for(var p = 0; p > answerArr.length; p++){
          while (answerPass === "pass"){
            if (firstAnswer === answerArr[p]){
              var firstAnswer = `${answerArr[p]} is on of the items`;
              console.log(`Yes ${firstAnswer} is one of the three thing I would make.`);
            } else {
              var firstAnswer = `${answerArr[p]} is on of the items`;
              console.log(`No I wouldnt put ${firstAnswer} in my Meal`);
            };
          }
          alert(firstAnswer);
          return firstAnswer;
          break;
          }
        }
      }
    }
  }
  // loop for counting trys
  for (var i = 6 ; i > 0 ; i--){
    var finalAnswer = false;
    var question = alert('Tell me what 3 things, you think I would put together for a July-4th meal?');
    firstGuess();
  
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
numberGuesser();