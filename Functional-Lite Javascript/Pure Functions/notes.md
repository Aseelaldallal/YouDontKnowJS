






Impure Function: Function that produces a side-effect
Side-effects are the big evil of functional programming


Example: Impure Function

var y,z;

function foo(x) {
    y = x*2;
    z=x*3;
}

Foo is changing the state of the program

Sometimes it's okay to have impure functions. But don't leave them exposed to the outside world.



Note: A program that only has pure functions is useless, because you can't change state. 