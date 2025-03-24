let arr = [ 'yash', 'sheeba', 'rohit', 'kiran'];
console.log("Original array: ", arr);

// Destructing the arra elements 

// Collect the inner items into separate variables

let [s1, s2, ,s3] = arr;
console.log("s1 :",s1);
console.log("s2 :",s2);
console.log("s3 :",s3);


// Rest Pattern
// let's say while accessing the students data, we need just 2 students as of now, 
// rest of them we need in an array to be processed  later.
// The rest operator is used to collect multiple items into an array

// it can be used in function parameters to expect unknown number of parameters,
//used for array or object destructuring.
// It is used in React for easy extraction of values from complex objects.

let [a,b, ...restOfStudents] = arr;

console.log(`
    a : ${a},
    b : ${b},
    rest : ${restOfStudents}
    `);

// Spread Operator : Used for unpacking arrays or objects
// Used for merging or combining object properties or arrays

let a1 = [1,2,3];
let a2 = [4,5,6];

let a3 = [...a1,...a2];

console.log(a3);

// Callbacks 

function display(r){
    console.log('The result is : ',r);
}
function f1(a,b,cf1){
    console.log("Calculating....");

    let sum = a + b;

    // here, the function referenced by cf1 is called back after implementing the logic
    // of the f1 function
    // These kind of functions which are passed into another functions as parameter,
    // to be called back by the function, is called a call back function.
    // For example, here , display is the callback function which is passed into f1. 
    cf1(sum);
}

f1(3,4,display);
