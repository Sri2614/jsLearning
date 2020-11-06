var user = {
    firstName : 'Sri',
    lastName : 'Balaji',
    role : 'Admin',
    loginCount : 22,
    facebookSignedIn : true,
    courseList: [],
    buyCourse: function(courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function (){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    getUserInfo: function(){
        return `${this.firstName} ${this.lastName} is an ${this.role} and he logged in for ${this.loginCount} times and signed up through Facebook - ${this.facebookSignedIn} and also have enrolled in ${this.courseList} courses`
    }
}
var courseList = true;
console.log(user.loginCount);
console.log(user.getCourseCount());
user.buyCourse("Angular Course")
user.buyCourse("React Course")
console.log(user.getCourseCount());
console.table(user.getUserInfo())