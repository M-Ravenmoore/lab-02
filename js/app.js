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

// change all user input to lowercase


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

//Question 1
function question1() {
  var convertedAnswer1 = null;
  while(convertedAnswer1 === null) {
    var answer1= prompt('Is the Sky blue?');
    convertedAnswer1 = convertUserInput(answer1);
  }
  if (convertedAnswer1 === 'yes'){
    answer1 = 'correct the sky is blue';
    console.log(answer1);
  } else if (convertedAnswer1 === 'no'){
    answer1 = 'Try again Next time';
    console.log(answer1);
  }
  console.log(playerName + ' answered ' + convertedAnswer1 + ' to Q1!');
  alert(answer1);
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
  } else if (convertedAnswer2 === 'no'){
    answer2 = 'Nope, they dont your right';
    console.log(answer2);
  }
  console.log(playerName + ' answered ' + convertedAnswer2 + ' to Q2!');
  alert(answer2);
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
  } else if (convertedAnswer3 === 'no'){
    answer3 = 'Not always no';
    console.log(answer3);
  }
  console.log(playerName + ' answered ' + convertedAnswer3 + ' to Q3!');
  alert(answer3);
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
  } else if (convertedAnswer4 === 'no'){
    answer4 = 'That bird is too Fast';
    console.log(answer4);
  }
  console.log(playerName + ' answered ' + convertedAnswer4 + ' to Q4!');
  alert(answer4);
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
  } else if (convertedAnswer5 === 'no'){
    console.log(answer5);
    answer5 = 'Thank you for having a brain';
  }
  console.log(playerName + ' answered ' + convertedAnswer5 + ' to Q5');
  alert(answer5);
  return answer5;
}

function question6() {
  var foodArr = ['Lobster Ravioli', 'Mac and Cheese', 'Apple pie', 'Shepards pie', 'lava Cakes', 'Beef ribs', 'Brusselsprouts', 'Key Lime tarts', 'Stuffed Mushrooms'];
  var answerArr = ['Apple pie', 'Mac and Cheese', 'Beef ribs'];
  for (var i = 6 ; i > 0 ; i--){
    var answer6 = prompt('Tell me what 3 things i would put to getheter for a supurb meal');
    var finalAnswer = false;
    
    for (var n = 0 ; n < answerArr.length; n++){
         
      }
    }
  }


function numberGuesser() {
  var guessNum = Number(prompt('pick a number between 1 and 25'));
  var correctAnswer = Math.floor(Math.random() * 26);
  for (var i = 0; i < 3; i++) {
    if (guessNum === correctAnswer) {
    console.log('Wow you got it!');
    alert('thats right! Exactly')
    break;
    } else if (guessNum < correctAnswer) {
    console.log('Too low, try again.');
    alert('Too low, Try again.')
    guessNum = Number(prompt('pick a number between 1 and 25'));
    } else if (guessNum > correctAnswer) {
    console.log('Too high, try again.');
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


    
    
question1();
question2();
question3();
question4();
question5();

numberGuesser();