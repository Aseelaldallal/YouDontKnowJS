function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************
// This was challenging

let requests = ["file1", "file2", "file3"];

function getFile(file) {
	return new Promise(function(resolve){
		fakeAjax(file,resolve);
	});
}


// let promiseList = requests.map(function(file) {
// 	return getFile(file);
// })

// // could have just done requests.map(getFile)!

// promiseList.reduce(function(previousPromise, currentPromise, currentPromiseIndex, myself) {
// 	let chain =  
// 		previousPromise
// 			.then(output)
// 			.then(function() {
// 				return currentPromise;
// 			})
// 	if(currentPromiseIndex === myself.length - 1) {
// 		chain
// 			.then(output)
// 			.then(function() {
// 				console.log("Complete!!");
// 			})
// 	}
// 	return chain;
// });



// map, reduce - list of values and compose them
// list of urls into list of promises
// compose all promises together: Reduce

// **************************************
// WORKING THROUGH HIS SOLUTION

["file1", "file2", "file3"]
.map(getFile)
.reduce(function combine(chain, pr) {
	return chain
		.then(function() {
			return pr;
		})
		.then(output);
}, Promise.resolve()).then(function() {
	output("Complete!");
})

// This is amazing!!!!!
// The end value of reduce is a promise chain.. so you can just add a .then at the end

// A good initial value for a promise chain? Promise.resolve()