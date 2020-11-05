// Arrow Function
var isEven = (element) => {
    // if(element % 2 === 0){
    //     return true
    // }
    // return false 
    return element % 2 === 0
}

// console.log(isEven(11))

// Callback Function

// var result = [2, 5, 6, 8].every(isEven)
// console.log(result);

var result = [2, 4, 6, 8].every((e) => e % 2 === 0);
console.log(result);

