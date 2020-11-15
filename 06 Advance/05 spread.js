// var obj = {};

// Object.assign(obj, {a:1, b:2, c:3}, {z:9, y:5, x:4});

// console.log(obj);

function sumOne(a,b){
    return a + b;
}

var myA = [5,4,6];
// console.log(sumOne(...myA)); // spread Operator

function sumTwo(a,b, ...args){ // rest operator
    console.log(args);
    let multi = a * b;
    let sum = 0;
    for (const arg of args) {
        sum += arg;      
    }
    return [sum, multi];
}

console.log(sumTwo(23,34,23,2));