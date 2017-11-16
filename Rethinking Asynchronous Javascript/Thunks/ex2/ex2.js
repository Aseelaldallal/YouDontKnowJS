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

/*// My SOL
function makeThunk(fn) {
	var args = [].slice.call(arguments, 1);
	return function(cb) {
		args.push(cb);
		fn.apply(null, args);
	}
}

function getFile(filename, callback) {
	var thunk = makeThunk(fakeAjax, filename);
	thunk(callback);
}


getFile("file1", function(result) {
	output(result);
	getFile("file2", function(result) {
		output(result);
		getFile("file3", function(result) {
			output(result);
			output("Complete!");
		});
	});
});

// Problem: Those requests aren't parallel*/




// **************************************


// Working with Kyle through sol

// To be an active thunk, we need to call fakeAjax right away
// We also know that a thunk must return a function, and that
// function must have only one argument which is a callback
function getFile(filename) {		
	var text, fn;
	fakeAjax(filename, function(response) {
		if(fn) fn(response);
		else text = response;
	}); // Race condition
	return function(cb) {
		if(text) cb(text);
		else fn = cb;
	};
};

var th1 = getFile("file1");
var th2 = getFile("file2");
var th3 = getFile("file3");

th1(function(text1) {
	output(text1);
	th2(function(text2) {
		output(text2);
		th3(function(text3) {
			output(text3);
			output("Complete!");
		});
	})
});

// Takeaway: Factored out time 
// Abstracted away concept of time







