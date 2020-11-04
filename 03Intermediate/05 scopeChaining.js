var name = "Sri";

console.log("line number 3", name);

function sayName(){
    var name = "Balaji";
    console.log("Line number 6",name);
    sayName2()

    function sayName2(){
        var name = "B.B"
        console.log("Line number 12", name);
    }
}

sayName()