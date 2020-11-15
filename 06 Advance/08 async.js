// Event Loop, Async in JS

const uno = () => {
    console.log("I am One");
}
const dos = () => {
    setTimeout(() => {
        console.log("Wohoooo");
    }, 3000)
    console.log("I am Two");
}
const tres = () => {
    console.log("I am Three");
}


uno();
tres();
dos();