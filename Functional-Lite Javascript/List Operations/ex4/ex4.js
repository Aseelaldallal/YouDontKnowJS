


// ---------------------------------------------------------------//
// 1. Write two functions, each which return a different number value when called.


function five() {
    return 5;
}

function three() {
    return 3;
}

// ---------------------------------------------------------------//
// 2. Write an `add(..)` function that takes two numbers and adds 
// them and returns the result. Call `add(..)` with the results of your 
// two functions from (1) and print the result to the console.

function add(x,y) {
    return x + y;
}

console.log(add(five(), three()));

// ---------------------------------------------------------------//
// 3. Write an `add2(..)` that takes two functions instead of two numbers, 
// and it calls those two functions and then sends those values to `add(..)`, 
// just like you did in (2) above.


function add2(fn1, fn2) {
    return add(fn1(), fn2());
}

var result = add2(five, three);

// ---------------------------------------------------------------//
// 4. Replace your two functions from (1) with a single function that takes a value 
// and returns a function back, where the returned function will return the value 
// when it's called.

function getNum(x) {
    return function() {
        return x;
    }
}

var getFive = getNum(5);
var getSix = getNum(6);
var getSeven = getNum(7);
var getEight = getNum(8);

var result2 = add2(getFive, getSix);
// ---------------------------------------------------------------//
// 5. Write an `addn(..)` that can take an array of 2 or more functions, 
// and using only `add2(..)`, adds them together. Try it with a loop. 
// Try it without a loop (recursion). Try it with built-in array functional 
// helpers (map/reduce).

var nums = [getFive, getSix, getSeven, getEight];

// With a loop
function addnLoop(arr) {
    var getTotal = getNum(0);
    for(var i=0; i<arr.length; i++) {
       getTotal = getNum(add2(getTotal, arr[i]));
    }
    return getTotal();
}

function addnLoop2(arr) {
    var total = 0;
    for(var i=0; i<arr.length; i++) {
        total = add2(getNum(total), arr[i]);
    }
    return total;
}

// With recursion

function addnRecur(arr) {
    if(arr.length === 1) {
        return add2(getNum(0), arr[0]);
    }
    return add2( arr[0], getNum( addnRecur(arr.slice(1)) ) );
}

// Built in array functional helpers

function addnWithReduce(nums) {
    var total = nums.reduce(function(accumulator, currIndex) {
        return getNum(add2(accumulator, currIndex));
    }, getNum(0));
    return total();
}

//Assume nums is an array of numbers not functions
function addWithMapReduce(nums) {
    return nums.map(getNum).reduce(function(accumulator, currIndex) {
        return getNum(add2(accumulator, currIndex));
    }, getNum(0))();
}

// ---------------------------------------------------------------//
// 6. Start with an array of odd and even numbers (with some duplicates), 
// and trim it down to only have unique values.

var randomNumbers = [2,3,5,1,3,2,5,6,7,9,12,14, 15,18, 5, 4];

function makeUnique(arr) {
    return arr.reduce(function(accumulator, currentIndex) {
        if(!accumulator.includes(currentIndex)) {
            accumulator.push(currentIndex);
        }
        return accumulator;
    }, []);
}


// ---------------------------------------------------------------//
// 7. Filter your array to only have even numbers in it.

function isEven(x) {
    return x % 2 == 0;
}

function keepEvens(arr) {
    return arr.reduce(function(accumulator, currentIndex) {
        if(isEven(currentIndex)) {
            accumulator.push(currentIndex);
        }
        return accumulator; 
    }, []); 
}

// You can use filter to keep evens -- Much Shorter
function keepEvensWithFilter(arr) {
    return arr.filter(isEven);
}

// Combining
var uniqueEvens = makeUnique(keepEvensWithFilter(randomNumbers));



// ---------------------------------------------------------------//
// Map your values to functions, using (4), and pass the new list of functions to the `addn(..)` from (5).

// I already did that
var getNine = getNum(9);
var getTen = getNum(10);

nums = [getFive, getSix, getSeven, getEight, getNine, getTen];

console.log(addnLoop(nums));
console.log(addnLoop2(nums));
console.log(addnRecur(nums));
console.log(addnWithReduce(nums)); 













// Reduce Exercises : MDN

// Flatten an Array of Arrays
[[0,1], [2,3], [4,5]].reduce(function(accuArray, currIndex) {
    return accuArray.concat(currIndex);
}, []);

[[0,1], [2,3], [4,5]].reduce((accuArray, currIndex) => accuArray.concat(currIndex));

// Counting instances of Values in an Object
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countedNames = names.reduce(function(allnames, name) {
    if(name in allnames) {
        allnames[name]++;
    } else {
        allnames[name] = 1;
    }
    return allnames;
}, {});


// Bonding arrays contained in an array of objects using the 
// spread operator and initialValue

// friends - an array of objects 
// where object field "books" - list of favorite books 
var friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }];

// allbooks - list which will contain all friends' books +  
// additional list contained in initialValue
var allbooks = friends.reduce(function(accumulator, currentIndex) {
    var merged = accumulator.concat(currentIndex.books);
    return merged;
}, ['Titan']);

// Alternatively with spread operator
var allbooks = friends.reduce(function(accumulator, currIndex) {
    return [...accumulator, ...currIndex.books];
}, ['Titan']);