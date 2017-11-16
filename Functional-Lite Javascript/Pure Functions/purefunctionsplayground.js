

function bar(x,y,z) {
    foo(x);
    return [y,z];

    function foo(x) {
        y = y*x;
        z = y*x;
    }
}

//bar(5,2,3);
//bar(5,10,15);