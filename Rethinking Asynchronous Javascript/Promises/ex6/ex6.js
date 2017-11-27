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


// let requests = ["file1", "file2", "file3"];

// function getFile(file) {
// 	return ASQ(function(done) {
//         fakeAjax(file, done);
//     })
// }

// requests
// .map(getFile)
// .map(function(currentSeq, index, array ) {
// 	ASQ().seq(currentSeq)
// 		 .val(output);
// })


// Coudln't solve this guy. Not sure if i'm
// a fan. Or ready to use a lib

// **************************************
// WORKING THROUGH HIS SOLUTION


function getFile(file) {
	return ASQ(function(done) {
        fakeAjax(file, done);
    })
}

ASQ().
seq(
	...["file1", "file2", "file3"]
	.map(getFile) // Array of sequence
	.map(function(sq) {
		return function() {
			return sq.val(output);
		}
	})
)
.val(function() {
	output("Complete");
})


