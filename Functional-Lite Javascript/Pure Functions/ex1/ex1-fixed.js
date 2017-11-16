function bar(x,y) {
	var z;

	foo(x);
	return [y,z];

	function foo(x) {
		y++;
		z = x * y;
	}
}

var y = 5, z;

foo(20,5);		// [6,120]

foo(25,6);		// [7,175]
