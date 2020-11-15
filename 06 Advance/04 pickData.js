// Destructure the data in JS

const user = ["sri", 4, "admin"];

// var role = user[2];
// var name = user[0];

// var [name, courseCount, role] = user;

const MyUser = {
    name: "sri",
    courseCount: 5,
    role: "admin"
}

console.log(MyUser);


const {name, courseCount, role} = MyUser;

console.log(role);
