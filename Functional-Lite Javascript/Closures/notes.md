


CLOSURE:

Closure is when a function "remembers" the variables around it
even when that function is executed elsewhere



RECURSION:

I love it.

Careful: Call stack.

Chrome: Depth of callstack 10,000 or so.

Tail Call Optimization: If I have a function that calls another function, whether it's recursive or not. If I've got one function, function A calling funcrtion B, if the way that it's calling function B is at the very last staement of that code path, and it's returning whatever B returns, so inother words, if A at the very end  of that code path I say return B parentheses wahtever, semi colon, that's what a proper tail call looks like.

If JS can identify that that's the case, it can saythe current stack frame taht I'm using, I don't need anymore. So I don't need  to make a new stack frame fo rB's call. I can reuse the stack frame for A. Which means if all my recursion is done with proper tail calls, then I can do arbitrarily deep recursion with O(1) mem usage. 

This is an important optimization that reclaims recursion because it becomes practical to use.

Virtually all recursion can be re-written to use proper tail calls. But this technique is difficult (see es6 book).

TAIL CALL OPTIMIZATION

