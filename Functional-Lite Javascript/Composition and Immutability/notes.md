Composition: Taking the output of one function and putting it as input 
of another function



function sum(x,y) {
    return x+y;
}

function mult(x,y) {
    return x*y;
}

// 5 + (3*4)

var z = mult(3,4);
z = sum(z,5);

This is an impure program. We are changing z. 

We can do this:
sum(5, mult(3,4));

This is a manual composition.

Now the outer program is pure. 

function multAndSum(x,y,z) {
    return sum(z, mult(x,y));
}



compose two utility: composes two functions


function compose2(fn1,fn2) {
    return function comp() { // we're making a function
        var args = [].slice.call(arguments);
        return fn2(
            fn1(args.shift(), args.shift());
            args.shift();
        );
    }
}



Immutability: 

const is about giving you an immutable binding, NOT value.
Primitives are by definition immutable.
Var and const control binding.

The Object.freeze() method freezes an object: that is, prevents new properties from being added to it; prevents existing properties from being removed; and prevents existing properties, or their enumerability, configurability, or writability, from being changed, it also prevents the prototype from being changed.  The method returns the object in a frozen state.
Shallow immutability