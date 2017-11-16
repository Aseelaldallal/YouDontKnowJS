


LIST TRANSFORMATION: MAP

Taking one value and doing something to it so you take another value out.

Key characteristic: A transformation, or mapping, results in a new list that is exactly the same number of values as the original list, and for every single value in the new list there is a one to one mapping is done with the function that you provide.

Method:
[1,2,3,4,5].map(..)

[1,2,3,4,5].map(doubleIt)
Functional programmers hate the above syntax
because it's harder to compose: compose has to be done with chaining.
You can't take this function and pass it as a parameter to another function
Transforming a promise?


--------------------------------------------------------------

LIST EXCLUSION: FILTER


Built into language by Filter
[1,2,3,4,5].filter(isOdd);

--------------------------------------------------------------

LIST COMPOSITION: REDUCE

Reduction: composition of values
chaining one promise into another

It is possible to use reduce in a non pure way.

unique. Initial: empty list
we could stick something in the list only if it isn't the list
// partial reduction


--------------------------------------------------------------

LIST ITERATION



