'use strict';

var userName= prompt ('Can i have your name please?');
console.log('The Users Name is' + userName);

function answer1() {
  var answer1;
  var question1= prompt('Is the Sky blue?');
  if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y'){
    answer1 = 'correct the sky is blue';
    // console.log(answer1 = 'correct the sky is blue');
  } else if (question1.toLowerCase() === 'no' || question1.toLowerCase() === 'n'){
    answer1 = 'Try again Next time';
    // console.log(answer1 = 'Try again Next time');
  } else alert('incorrect response please use Y/N or Yes/No');
  return answer1;
}

function answer2() {
  var answer2;
  var question2= prompt('Do woodchucks chuck wood?');
  if (question2.toLowerCase() === 'yes' || question2.toLowerCase() === 'y'){
    answer2 = 'Sorry i dont Think so';
    // console.log(answer2 = 'Sorry i dont Think so');
  } else if (question2.toLowerCase() === 'no' || question2.toLowerCase() === 'n'){
    answer2 = 'Nope they dont your right';
    // console.log(answer2 = 'Nope they dont your right');
  } else alert('incorrect response please use Y/N or Yes/No');
  return answer2;
}

function answer3() {
  var answer3;
  var question3= prompt('Gravity works Yes or no?');
  if (question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y'){
    answer3 = 'Most of the time your are correct';
    // console.log(answer3 = 'Most of the time your are correct');
  } else if (question3.toLowerCase() === 'no' || question3.toLowerCase() === 'n'){
    answer3 = 'Not always no';
    // console.log(answer3 = 'Not always no');
  } else alert('incorrect response please use Y/N or Yes/No');
  return answer3;
}

function answer4() {
  var answer4;
  var question4= prompt('will the Coyote ever catch The road runner?');
  if (question4.toLowerCase() === 'yes' || question4.toLowerCase() === 'y'){
    answer4 = 'Not if he keeps useing AMCE products';
    // console.log(answer4 = 'Not if he keeps useing AMCE products');
  } else if (question4.toLowerCase() === 'no' || question4.toLowerCase() === 'n'){
    answer4 = 'That bird is too fast';
    // console.log(answer4 = 'That bird is too fast');
  } else alert('incorrect response please use Y/N or Yes/No');
  return answer4;
}

function answer5() {
  var answer5;
  var question5= prompt( 'The world is Flat yes or no?');
  if (question5.toLowerCase() === 'yes' || question5.toLowerCase() === 'y'){
    answer5 = 'NO, GO READ A BOOK';
    // console.log(answer5 = 'NO, GO READ A BOOK');
  } else if (question5.toLowerCase() === 'no' || question5.toLowerCase() === 'n'){
    answer5 = 'Thank you for having a brain';
    // console.log(answer5 = 'Thank you for having a brain');
  } else alert('incorrect response please use Y/N or Yes/No');
  return answer5;
}


function guessNum() {
  var correctAnswer = 5;
  var guessNum = Number(prompt('pick a number between 1 and 25'));
  for (var i = 0; i < 4; i++) {
    if (guessNum === correctAnswer) {
      console.log('Wow you got it!');
      break;
    } else if (guessNum < correctAnswer) {
      console.log('Too low, try again.');
      guessNum = Number(prompt('pick a number between 1 and 25'));
    } else if (guessNum > correctAnswer) {
      console.log('Too high, try again.');
      guessNum = Number(prompt('pick a number between 1 and 25'));
    } else {
      console.log('Invalid response');
      guessNum = Number(prompt('pick a number between 1 and 25'));
    }
  }
}

// changes testing a thing)?


alert('Welcome ' + userName + ', to my about me game! The results of your quiz are as follows');
alert('Question 1: Is the Sky blue?' + answer1() + ' Question 2: Do woodchucks chuck wood?' + answer2() + ' Question 3: Gravity works Yes or no?' + answer3() + ' Question 4: will the Cyote ever catch The road runner?' + answer4() + ' Question 5: The world is Flat yes or no? ' + answer5() + '.  How Did You Do?');
