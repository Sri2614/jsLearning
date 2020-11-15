const User = require("./06classJS"); // Importing Classes

const sri = new User("Sri", "sri@lco.dev");

console.log(sri.getInfo());
sri.enrollCourse("React Bootcamp");
sri.enrollCourse("Angular Bootcamp");

console.log(sri.getCourseList());


let courses = sri.getCourseList();

courses.forEach((c) => console.log(c));