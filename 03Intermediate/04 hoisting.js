// CODE HOISTING in JS

/* 
1) Global Context
2) Execution Context
    Variable Object
    Scope Chain
    this
*/

tipper("80");

function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}


var bigTipper = function(a){
    var bill = parseInt(a);
    console.log(bill + 25);
}

bigTipper("100");

console.log(name);
var name = "Sri"


function sayName(){
    var name = "MR. AWS";
    console.log(name);
}

sayName()

console.log(name);