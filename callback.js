// A callback is just a fancy name for a function passed as an argument to another function. 
// It's the most common way of writing asynchronous code in JavaScript. JavaScript itself is synchronous. 
// It must complete one line of code before continuing to the next. However, we may write asynchronous code, 
// which means we may divide your code into portions that run now and later. 
// What would that even look like?

var ninja = 'Libby';
// run code AFTER some set time
setTimeout( function (){ console.log(ninja); }, 2000 ); // run the function defined after 2000 milliseconds
console.log(ninja);

console.log("NOW: ");
console.log("Declaring and assigning variable 'ninja'.");
var ninja = 'Libby';
setTimeout( function myCallbackFunction(){
  console.log("LATER: ")
  console.log(ninja, "LATER"); }, 2000
);
console.log("Printing ninja value.");
console.log(ninja, "NOW");

function doSomething(possibleCallback) {
    if (typeof(possibleCallback) === 'function'){
      console.log('possibleCallback is a callback!');
      possibleCallback(); //we can invoke the callback!
    }
    else {
      console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
    }
  }
  doSomething(function myCallback(){ console.log('yes, I am a callback!') });
  doSomething('string');

  function makePasta(pasta, makeSauce) {
    console.log("Boiling water");
    console.log("Putting " + pasta + " pasta in the water");
    console.log("Pasta is done!");
    return pasta + " Pasta! Voila!";
  }
  makePasta("Penne");
  makePasta("Farfalle");