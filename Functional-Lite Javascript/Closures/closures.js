
// Express this as Recursion

function sumIter() {
    var sum = 0;
    for(var i=0; i<arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

// My SOL

function recur(nums) {
    if(nums.length === 0) {
        return 0; 
    }
    return nums.shift() + recur(nums);
}

// Avoiding passing in the array

function sumRecur() {
    var args = [].slice.call(arguments);
    if(args.length <=2) {
        return args[0] + args[1];
    }
    return (
        args[0] +
        sumRecur.apply(null, args.slice(1))
    );
}

function sumRecur2() {
    var args = [].slice.call(arguments);
    if(args.length === 1) { // I like this more
        return args[0];
    }
    return args[0] + sumRecur2.apply(null, args.slice(1));
}

// Using ES6 to clean this up

function sumRecur3(...args) {
    if(args.length === 1) { // I like this more
        return args[0];
    }
    return args[0] + sumRecur3(...args.slice(1));

}

// THIS IS NOT A PROPER TAIL CALL. Because after sumRecur3 is called, another addition is called
// A proper tail call: the very last thing is the function call
// You can rewrite this as a proper tail call