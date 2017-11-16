





//Turn `mult(..)` into a recursive function that can work on as many 
//arguments as necessary.


function mult(x,y,z) {
	return x * y * z;
}

mult(3,4,5);	// 60

mult(3,4,5,6);	// Oops!


// MY SOL


function multRecur(...args) {
    if(args.length === 1) {
        return args[0];
    }
    return args[0] * multRecur(...args.slice(1));
}