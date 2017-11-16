

//Note: Thunks don't solve inversion of control problem. We're laying 
//foundations for promises.

/*
function addAsync(x,y,cb) {
	setTimeout(function() {
		cb(x+y);
	}, 1000);
}

var thunk = function(cb) {
	addAsync(10,15, cb)
};

thunk(function(sum) {
	console.log(sum);
});

------------------------------------



function addAsync(x,y,cb) {
	setTimeout(function() {
		cb(x+y);
	}, 1000);
}

var makeThunk = function(fn) {
	console.log("FN: ", fn)
	var args = [].slice.call(arguments, 1);
	return function(cb) {
		args.push(cb);
		fn.apply(null, args);
	}
}

var thunk = makeThunk(addAsync, 10, 15);
console.log("THUNK: ", thunk);

thunk(function(sum) {
	console.log(sum);
});

------------------------------------

// ASYNCHRONOUS THUNK

var makeThunk = function(fn) {
	var args = [].slice.call(arguments, 1);
	return function(cb) {
		args.push(cb);
		fn.apply(null, args);
	}
}

function addAsync(x,y,cb) {
	setTimeout(function() {
		cb(x+y);
	}, 1000);
}

function multiplyAsync(x,y,cb) {
	setTimeout(function() {
		cb(x*y);
	}, 5000);
}

function printResult(result) {
	console.log(result);
}

var addThunk = makeThunk(addAsync, 10, 15);
addThunk(printResult);

var multiplyThunk = makeThunk(multiplyAsync, 10, 10);
multiplyThunk(printResult);

var addThunk = makeThunk(addAsync, 10, 20);
addThunk(printResult);

------------------------------------
*/

/*function getData(d, cb) {
	setTimeout(function() {
		cb(d);
	}, 1000);
}

getData(10, function(num1) {
	var x = 1 + num1;
	getData(30, function(num2) {
		var y = 1 + num2;
		getData("Meaning of life: " + (x+y), function(answer) {
			console.log(answer);
		});
	});
});
*/

// Rewrite using Thunks 
// LAZY THUNK -- Doesn't do the work until you call it the first time


/*var makeThunk = function(fn) {
	var args = [].slice.call(arguments, 1);
	return function(cb) {
		args.push(cb);
	function getData(d, cb) {
	setTimeout(function() {
		cb(d);
	}, 1000);
}
	fn.apply(null, args);
	}
}

function printResult(result) {
	console.log(result);
}

var get10 = makeThunk(getData, 10);
var get30 = makeThunk(getData, 30);


get10(function(num) {
	var x = num + 1;
	get30(function(num) {
		var y = num + 1;
		var getAnswer = makeThunk(getData, "Meaning of life: " + (x+y));
		getAnswer(printResult);
	});
})
*/
// Active Thunk - did the work, held on to the


//----------------------------------------------------

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



function getFile(filename) {
	var text, fn;
	fakeAjax(filename, function(response) {
		if(fn) fn(response);
		else text = response;
	});
	return function(cb) {
		if(text) cb(text);
		else fn = cb;
	};
}


th1 = getFile("file1");
th2 = getFile("file2");
th3 = getFile("file3");


th1(function(response) {
	output(response);
	th2(function(response) {
		output(response);
		th3(function(response) {
			output(response);
			output("Complete!");
		})
	})
}








