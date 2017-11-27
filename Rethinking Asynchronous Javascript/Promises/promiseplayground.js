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



// function getData(d) {
// 	return new Promise(function(resolve, reject) { // resolve and reject are functions
// 		setTimeout(function() {
// 			resolve(d); // Returns a promise object that is resolved with the given value
// 		}, 1000);
// 	});
// }

// var x;

// getData(10) // Returns a promise that 1000 ms from now we'll resolve the promise
// .then(function(num1) {
// 	x = 1 + num1;
// 	return getData(30);
// }) // waits for the promise of getData(30)
// .then(function(num2) {
// 	y = 1 + num2;
// 	return getData("Meaning of Life: " + (x + y));
// })
// .then(function(answer) {
// 	console.log(answer);
// });


// promise.all takes an array of promises, gives us a promise
// waits for all to finnish and you get an array of the results


//Example --- GATE

// Promise.all([
// 	doTask1a(),
// 	doTask1b(),
// 	doTask1c()
// ])
// .then(function(results) {
// 	return doTask2(
// 		Math.max(
// 			results[0], results[1], results[2]
// 		);
// 	);
// });

// so if doTask1a etc were generating random numbers... then get the max

// THIS IS CALLED A GATE. .ALL requires successful completion

// EXAMPLE - RACE

// Promise.race([]). takes an array of promises. Waits for ANY resolution (success or fail) of a promises
// .. whichever finishes first wins everybody else gets ignored

// var p = trySomeAsyncThing();

// Promise.race([
// 	p,
// 	new Promise(function(_, reject) {
// 		setTimeout(function() {
// 			reject("TIMEOUT");
// 		}, 3000);
// 	})
// ])
// .then(
// 	success,
// 	error
// )

// So now you could timeout if the promise isn't fullfilled in 3 seconds. THIS IS USEFUL

// But there is a higher order abstraction for timing out promises ...!

// promise.all promise.race ships natively with the api that comes in the browser


// ASYNQUENCE VERSION OF MEANING OF LIFE

function getData(d) {
	return ASQ(function(done) {
		setTimeout(function() {
			done(d);
		}, 1000);
	})
}

ASQ()
.waterfall(
	function(done) { getData(10).pipe(done); },
	function(done) { getData(30).pipe(done); }
)
.seq(function(num1, num2) {
	var x = 1 + num1;
	var y = 1 + num2;
	return getData("Meaning of Life: " + (x+y));
})
.val(function(answer) {
	console.log(answer);
})


// .