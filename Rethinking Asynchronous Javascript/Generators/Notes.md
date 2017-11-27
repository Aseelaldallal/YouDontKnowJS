


Run to Completion Semantic. Function always runs to completion. 

Generators don't have Run to Completion Semantic. 

Syntactic form of declaring a state machine. 

Yeild -> Pause button.

Generator: Pausable function. Wherever yeild keyword shows up, everything
pauses. It'll wait at pause state indefinitely until something tells it
to resume.

Localized blocking: ONLY inside the generator paused. The program is not blcoked.

function* gen() {
    console.log("Hello");
    yield;
    console.log("World")
}

Gen function specified with *

Cooperative Concurrency -- Noone is telling it to yeild. It decides to yeild on its
own.

var it = gen(); Executing generator doesn't execute code, produces iterator. 

We can ask the generator to run until IT WANTS to pause.

it.next() --> I start running the generator till it hits a yeild // hello
it.next() // world

There could be a delay in time between each.

function *main() {
    yield 1;
    yield 2;
    yield 3;
}

var it = main();

it.next(); // value : 1 , done:false
it.next() // value: 2, done: false
it.next(); // value: 3, done: false // its paused on the last expression
it.next(); // value: undefined, done: true

We could yeild an ajax call

Generators don't have to finnish. Sometimes you're
going to design them to never finnish.

Problem: 
Inversion of control. Someone could call it.next()
and screw everything up. And so we combine promises!

We're going to yield promise.

yield promise
somebody gets promise (whoever is driving the generator it.next).
So somebody somewhere is calling it.next and getting
a promise. 
Its gonna do promise.then(it.next())
I.e when promise resolves , it unpauses generator (resumes it)

Yield Pause Resume Yeild Pause Resume...
Write utility to do this. OR... 
Use library
Asynquence: runner
Q
Co
All major libraries have this.

function getData(d) {
    return ASQ(function(done) {
        setTimeout(function() {
            done(d);
        }, 1000)
    })
} // Returns promise


Yeilding out a promise resuming a generator

ASQ()
.runner(function*() {
    var x = 1 + (yield getData(10));
    var y = 1 + (yield getData(30));
    var answer = yield (getData(
        "Meaning of life: " + (x+y);
    ));
    yield answer;
})
.val(function(answer) {
    console.log(answer);
})


.runner knows that if you yeild out a promise,
it automatically waits for that and then resume



****************************REVIEW:*********************************


Callback Hell:
--- Inversion of Control
--- Non local, non sequential reasoning

Promise:
--- Placeholder for a value
--- Future value
--- Completion Event (then event)
--- Callback Manager (we pass our callback to promise system, manages them in a way that gives them TRUST)
--- Uninverts inversion of Control

Generator:
--- yield
--- .next()
--- Combine with a promise! Yield a promise! Promise resumes generator -- use a lib!!!

MAGIC.


