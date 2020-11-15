var myMaps = new Map();

myMaps.set(1, "Uno");
myMaps.set(2, "dos");
myMaps.set(3, "Tres");
myMaps.set(4, "Cuatro");

console.log(myMaps);

// for(let value of myMaps.values()){
//     console.log(`Value is ${value}`);
// }
for(let [key, value] of myMaps){
    console.log(`Key is : ${key} and  Value is ${value}`);
}

myMaps.forEach((value, key) => console.log(`${value} ${key}`))

myMaps.delete(2)
console.log(myMaps);