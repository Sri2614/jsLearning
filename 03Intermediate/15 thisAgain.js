console.log(this);


var user = {
    firstName: 'Sri',
    courseCount: 4,
    getCourseCount: function(){
        console.log("LINE 8 ", this);
// For all regular function calls, 'this' points to window object
        function sayHello(){
            console.log("Hello");
            console.log("LINE NUMBER 11 ", this);
        }
        sayHello();
    }
}

user.getCourseCount();