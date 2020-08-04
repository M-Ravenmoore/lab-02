'use strict';

// design notes to start
// 5 y/n questions and user name propts at beging
// console log responses to be used later
// use 5 y/n answers to make personal greating for user including user name
// useing switch and if else coding

var userName= prompt ('Can i have your name please?');
console.log('The Users Name is' + userName);

var answer1= prompt('Is the Sky blue?');
if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y'){
  console.log('correct the sky is blue');
} else if (answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'n'){console.log('Try again Next time');
} else alert('incorrect response please use Y/N or Yes/No');

var answer2= prompt('Do woodchucks chuck wood?');
if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y'){
  console.log('Sorry i dont Think so');
} else if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n'){console.log('Nope they dont your right');
} else alert('incorrect response please use Y/N or Yes/No');

var answer3= prompt('Gravity works Yes or no?');
if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y'){
  console.log('Most of the time your are correct');
} else if (answer3.toLowerCase() === 'no' || answer3.toLowerCase() === 'n'){console.log('Not always no');
} else alert('incorrect response please use Y/N or Yes/No');

var answer4= prompt('will the Cyote ever catch The road runner?');
if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y'){
  console.log('Not if he keeps useing AMCE products');
} else if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n'){console.log('That bird is too fast');
} else alert('incorrect response please use Y/N or Yes/No');

var answer5= prompt( 'The world is Flat yes or no?');
if (answer5.toLowerCase() === 'yes' || answer5.toLowerCase() === 'y'){
  console.log('GO READ A BOOK');
} else if (answer5.toLowerCase() === 'no' || answer5.toLowerCase() === 'n'){console.log('Thank you for having a brain');
} else alert('incorrect response please use Y/N or Yes/No');


alert('Welcome' + userName + 'to my about me game');
// alert('The answers to your questions are: ' + answer1 + ', ' + answer2 + ', ' + answer3 + ', ' + answer4 + ', ' + answer5 + '.')