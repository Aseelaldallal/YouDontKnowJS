function fakeAjax(url,cb) { // cb here is the resolve function
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]); // we're calling resolve here and passing text in
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************

// My solution
// We need to return a promise
function getFile(file) {
	return new Promise(function(resolve, reject) {
		fakeAjax(file, resolve);
	});
}

let p1 = getFile("file1");
let p2 = getFile("file2");
let p3 = getFile("file3");

p1
.then(output)
.then(function() {
	return p2;
})
.then(output)
.then(function() {
	return p3;
})
.then(output)
.then(function() {
	console.log("Complete!");
})


// **************************************
// Working through his solution
// THIS PATTERN IS CALLED LIFTING!!!
// We have a utility that doens't know about promises and we're adapting it -- LIFTING
/*function getFile(file) {
	return new Promise(function executer(resolve) {
		fakeAjax(file, resolve); // We're not taking of errors here
	}); 
}

var p1 = getFile("file1");
var p2 = getFile("file2");
var p3 = getFile("file3");

// We're assuming that promise always resolves

p1 // If p1 were to reject, the rejection will propagate down the chain. But we're not listening for it, so it'll just be there
.then(output) // I'm not returning anything from output. If i was, it'll be passed into next function
.then(function() {
	return p2;
})
.then(output)
.then(function() {
	return p3;
})
.then(output)
.then(function() {
	output("Complete!");
})
*/
// Promise gets resolved to value forever. Immutable

// dont next