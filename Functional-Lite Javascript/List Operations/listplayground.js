



function doubleIt(v) {
    return v*2;
}

function transform(arr,fn) {
    var list = [];
    for (var i=0; i<arr.length; i++) {
        list[i] = fn(arr[i]);
    }
    return list;
}



function isOdd(v) {
    return v%2 == 1;
}


function exclude(arr, fn) {
    var list =[];
    for(var i=0; i<arr.length; i++) {
        if(fn(arr[i])) {
            list.push(arr[i]);
        }
    }
    return list; 
}

exclude([1,2,3,4,5], isOdd);


// accumulator, value
function mult(x,y) {
    return x * y;
}

// initial : we need the first element in the list to have something
// to compose with
function compose(arr, fn, initial) {
    var total = initial;
    for( var i=0; i<arr.length; i++) {
        total = fn(total, arr[i]);
    }
    return total;
}

// What would my initial value be? Extra complication of composition
// For example: an initially resolved promise

// FULL COMPOSITION: Started with a list --> ended with a number
