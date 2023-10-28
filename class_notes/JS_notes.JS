
// double or single quotes dont matter for strings - like python
'quoted text'; // " also works

const l = 'literal';
console.log(`string ${l + (1 + 1)} text`);
// OUTPUT: string literal2 text

// this is JS's runtime build in fuction (console.log())
console.log('Hello' + ' ' + 'world');


// good practice to end JS statements with semicolons, but not required
function join(a,b) {
    return a + ' ' + b;
}
console.log(join('Hello', 'world'))

// %s is a place holder for a string:  example:
console.log("Welcome, %s", "Katie")
// %c is a placeholder for styled texted
// running this in the console (chrome or other options) will change the color and the font size when ran
console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');

// If you are trying to see how long a piece of code is running you can wrap it with time 
// and timeEnd calls and it will output the duration between the time and timeEnd calls.

console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms

// To see how many times a block of code is called you can use the count function.
console.count('a');
// OUTPUT: a: 1
console.count('a');
// OUTPUT: a: 2
console.count('b');
// OUTPUT: b: 1

function sayHello() {
    console.log('hello');
  }

// Variables are declared using either the let or const keyword. 
// let allows you to change the value of the variable 
// while const will cause an error if you attempt to change it.

let x = 1;

const y = 2;


// type converstions 
2 + '3';
// OUTPUT: '23'
2 * '3';
// OUTPUT: 6
[2] + [3];
// OUTPUT: '23'
true + null;
// OUTPUT: 1
true + undefined;
// OUTPUT: NaN

1 == '1';
// OUTPUT: true
null == undefined;
// OUTPUT: true
'' == false;
// OUTPUT: true

// === are for eexact matches comparisons
1 === '1';
// OUTPUT: false
null === undefined;
// OUTPUT: false
'' === false;
// OUTPUT: false

('b' + 'a' + +'a' + 'a').toLowerCase();

// loops: for, do while, while, for in, for of
// break and continue 

// functions
// A function without a return value usually exists to produce some side effect 
// like modifying a parameter or interacting with an external program. 
// In the following example the side effect of the function is to output text to the debugger console.

function hello(who) {
  who.count++;
  console.log('hello ' + who.name);
}

hello({ name: 'world', count: 0 });
// OUTPUT: hello world

function labeler(value, title = 'title') {
    console.log(`${title}=${value}`);
  }
  
  labeler();
  // OUTPUT: title=undefined
  
  labeler('fish');
  // OUTPUT: title=fish
  
  labeler('fish', 'animal');
  // OUTPUT: animal=fish

  // Function that takes a function as a parameter
function doMath(operation, a, b) {
    return operation(a, b);
  }
  
  // Anonymous function assigned to a variable
  const add = function (a, b) {
    return a + b;
  };
  
  console.log(doMath(add, 5, 3));
  // OUTPUT: 8
  
  // Anonymous function assigned to a parameter
  console.log(
    doMath(
      function (a, b) {
        return a - b;
      },
      5,
      3
    )
  );
  // OUTPUT: 2

  function testAll(input, tester) {
    return input.every(tester);
  }
  
  const result = testAll(["abc", "bbbbb"], (i) => i.length > 3);
  
  console.log(result);