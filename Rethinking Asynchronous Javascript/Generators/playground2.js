

var fs = require('fs');
let dirname = "Look Sync Do Async";
const ASQ = require('asynquence-contrib');

// function *gen(done) {
//     var contents = yield fs.readdir(dirname, done); 
//     console.log(contents);
// }

// var G = gen(function(err, res) {
//     if (err) G.throw(err);
//     else G.next(res);
// });

// G.next();


function readDirectory(dir) {
    return ASQ(function(done){
        fs.readdir(dir,function(err,...success){
          if (err) done.fail(err);
          else done(...success);
        });
    });
}

function readDirectory(dir) {
    return ASQ(function(done){
        fs.readdir(dir,done.errfcb);
    });
}

function *gen() {
    let exercises = yield readDirectory(dirname);
    console.log(exercises);
}

ASQ().runner(gen);