/*
// Promise Chain: Better than thunks and callbacks. But this isn't the important part

dofirstThing() // gives us a promise
.then(function() {
	return doSecondThing(); // RETURN!!
})
.then(function() { // Won't proceed immediately, will wait for the promise returned above
	return doThirdThing();
})
.then(
	complete,
	error
);

// organized into vertical chain. Least important part. */


// MEANING OF LIFE EXAMPLE



function getData(d) {
	return new Promise(function(resolve, reject) { // resolve and reject are functions
		setTimeout(function() {
			resolve(d); // Returns a promise object that is resolved with the given value
		}, 1000);
	});
}

var x;

getData(10) // Returns a promise that 1000 ms from now we'll resolve the promise
.then(function(num1) {
	x = 1 + num1;
	return getData(30);
})
.then(function(num2) {
	y = 1 + num2;
	return getData("Meaning of Life: " + (x + y));
})
.then(function(answer) {
	console.log(answer);
});


