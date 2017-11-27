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
	return ASQ(function(done) {
        fakeAjax(file, done);
    })
}

const a1 = getFile("file1");
const a2 = getFile("file2");
const a3 = getFile("file3");

a1
.val(output)
.seq(a2)
.val(output)
.seq(a3)
.val(output)
.val(function() {
    output("Complete!");
});

// **************************************
// WORKING THROUGH HIS SOLUTION

// Usually error first style functions. FakeAjax isn't this
// simple callback rather than error first style
// var getFile = ASQ.wrap(fakeAjax, {simplecb: true});

// getFile("file1")
// .val(output) // Synchronous step
// .seq(getFile("file2"))
// .val(output)
// .seq(getFile("file3"))
// .val(output)
// .val(function() {
//     output("Complete!");
// });

// Much shorter. 