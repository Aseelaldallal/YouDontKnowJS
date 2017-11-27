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

function getFile(file) {
	return ASQ(function(done){
		fakeAjax(file,done);
	});
}

// We need to use generators

//getFile is returning a promise

var s1 = getFile("file1");
var s2 = getFile("file2");
var s3 = getFile("file3");

function* printResponses() {
    console.log(yield s1);
    console.log(yield s2);
    console.log(yield s3);
    console.log("Complete!!!");
}

ASQ().runner(printResponses);
