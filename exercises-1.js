

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    // YOUR CODE HERE
    for (var i = 0; i < array.length; i++) {
      callback (array[i]);
    }
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var mySum = 0;
    for (var i = 0; i < args.length; i++) {
      mySum = mySum + args[i];
    }
    return mySum;
}

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var mySum = 0;
    for (var i = 0; i < args.length; i++) {
      mySum = mySum + args[i]
    }
    return mySum / args.length;
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    // return Math.max.apply(null, args); //One Method, but not ours.
    bigNumba = 0;
    for (var i = 0; i < args.length; i++) {
      if (args[i] > bigNumba) {
        bigNumba = args[i];
      }
    }
    return bigNumba;
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var longWord = "";
    args.forEach(function(arg) {
      if (longWord.length < arg.length) {
        longWord = arg;
      }
    })
    return longWord;
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()

var stringArray = ['Blue', 'Humpback', 'Beluga'];
stringArray.sort();

console.assert["Beluga", "Blue", "Humpback"];

// .concat()

var alpha = ['a', 'b', 'c'],
    numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric);

console.assert['a', 'b', 'c', 1, 2, 3];

// .indexOf()

var array = [3, 6, 5];

array.indexOf(6);

console.assert[1];

// .split()

var myString = 'My fake plants died because I did not pretend to water them.';
var splits = myString.split(' ', 4);

// console.log(splits);
console.assert["My", "fake", "plants", "died"];

// .join()

var a = ['Felt', 'Like', 'Running'];
var myVar1 = a.join();      // assigns 'Felt,Like,Running' to myVar1
// var myVar2 = a.join(', ');  // assigns 'Felt, Like, Running' to myVar2
// var myVar3 = a.join(' + '); // assigns 'Felt + Like + Running' to myVar3
// var myVar4 = a.join('');    // assigns 'FeltLikeRunning' to myVar4

// console.log(myVar1);
// console.log(myVar2);
// console.log(myVar3);
// console.log(myVar4);

console.assert['Felt, Like, Running'];

// .pop()

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

console.log(myFish); // ['angel', 'clown', 'mandarin', 'sturgeon']

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'


// .push()

var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']


console.assert["soccer", "baseball","football", "swimming"];


// .slice()

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);

console.assert["Banana", "Lemon"];

// .splice()

// .shift()

// .unshift()

// .filter()

// .map()
