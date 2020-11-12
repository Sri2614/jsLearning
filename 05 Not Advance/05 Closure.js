// function init(){
//     var firstName = "Sri";
//     function sayFirstName(){
//         console.log(firstName);
//     }
//    return sayFirstName();
// }

// var value = init();




function doAddition(x){
    return function(y){
        return x + y;
    }
}


var add = doAddition(10);

console.log(add(4));

console.log(doAddition(10)(13)); // Curring