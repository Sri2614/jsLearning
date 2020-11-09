const red = document.querySelector('.red')
const cyan = document.querySelector('.cyan')
const violet = document.querySelector('.violet')
const orange = document.querySelector('.orange')
const pink = document.querySelector('.pink')
const center = document.querySelector('.center');

// console.log(window.getComputedStyle(red).backgroundColor); 


const getBGColor =  (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// var color1 = getBGColor(orange);
// var color2 = getBGColor(cyan);

// orange.addEventListener('dblclick', () => {
//     center.style.background = color1;
// });
// cyan.addEventListener('mouseleave', () => {
//     center.style.background = color2;
// });

const magicColorChanger = (element, color) => {
    return element.addEventListener('mouseleave', () => {
        center.style.background = color;
    });
    
}

magicColorChanger(cyan, getBGColor(cyan));