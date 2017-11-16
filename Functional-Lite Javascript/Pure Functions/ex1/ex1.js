

// -------- MY SOLUTION -------- //

function bar (x,y,z) {
	
	foo(x);
	return [y,z];

	function foo(x) {
		y++;
		z = x*y;
	}
}



// -------- HIS SOLUTION -------- //

// Does x represent the state of our program? No
// y? It is part of our state
// z? It is an output of our program. But it is not something re-used each time. 

function bar(y,x)  {
	
	var z;
	foo(x);
	return [y,z]; 

	function foo(x) {
		y++;
		z = x*y;
	}
}

