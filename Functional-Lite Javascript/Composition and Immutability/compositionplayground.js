
console.log("HELLO");



function sum(x,y) {
    return x + y;
}

function mult(x,y) {
    return x*y;
}


// So many assumptions
function compose2(fn1,fn2) {
    return function comp() { // we're making a function
        var args = [].slice.call(arguments);
        return fn2(
            fn1(args.shift(), args.shift()),
            args.shift()
        );
    }
}

var multAndSum = compose2(mult,sum);

multAndSum(3,4,5);