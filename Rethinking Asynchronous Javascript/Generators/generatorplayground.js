

// Wrapping around generator
function coroutine(g) {
    var it = g(); // produce iterator
    return function() { // returning a function when called, calls iterator.next, pass in argument, and return any value out
        return it.next.apply(it,arguments);
    }
}

var run = coroutine(function*() {
    var x = 1 + (yield);
    var y = 1 + (yield);
    yield(x+y);
});

run(); // don't pass value - no yeild waiting for it - value dissapears
run(10);
console.log(
    "Meaning of life: " + run(30).value
);


// MEANING OF LIFE EXAMPLE



function getData(d) { // you're yeilding out undefined
    setTimeout(function() {
        run(d);
    }, 1000);
}

var run = coroutine(function*() {
    var x = 1 + (yield getData(10));
    var y = 1 + (yield getData(30));
    var answer = (yield getData(
        "Meaning of life: " + (x+y)
    ))
    console.log(answer);
})

run();

// MAGIC!!! Looks synchronous!!!!!!!!!


// Inversion of control. Someone could call it.next()
// and screw everything up. He


// RUNNER AUTOMATICALLY KNOWS THAT IF YOU YIELD OUT A PROMISE IT WAITS FOR THAT THEN CALLS .next