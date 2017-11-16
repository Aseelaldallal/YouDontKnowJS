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
// The old-n-busted callback way

function getFile(file) {
	return new Promise(function(resolve){
		fakeAjax(file,resolve);
	});
}

// Request all files at once in
// "parallel" via `getFile(..)`.
//
// Render as each one finishes,
// but only once previous rendering
// is done.

// ???


// whats tools might i be abl to use to create a list that could be arbitrarily long 
// and still have these actions occur


// MAP - List of values and transform IDBTransaction
// REDUCE - List of values and compose them together
// List of URLS ---> List of promises
// how might i compose all those promises togethernd if 
// I had a list of promises, how might I compose all those promises together? 
// I could maybe do a reduction on the list of promises and create an arbitrarily 
// long promise chain. That's your exercise four. Have fun.