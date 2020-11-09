//  For In - Looping for Objects, For of Loop - Looping for Arrays in JS

const names = ['YouTube', 'FB', 'Instagram', 'Amazon', 'Netflix'];

// names.forEach((c) => {console.log(c);})


for(const n of names){
    // console.log(n);
}

const symbols = {
    yt: 'YouTube',
    ig: 'Instagram',
    fb: 'Facebook',
    lco: 'LearnCodeOnline.in'
}

for(const s in symbols){
    console.log(`Key is:  ${s} & Value is: ${symbols[s]} `);
}