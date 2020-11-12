const sri = {
    firstName : "Sri",
    lastName : "Balaji",
    role: "Admin",
    courseCount : 5,
    getInfo : function() {
        console.log(`
        First Name is ${this.firstName}
        Last Name is ${this.firstName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
    }
}


const dj = {
    firstName : "Rock",
    lastName : "DJ",
    role : "Sub-Admin",
    courseCount : 4,
}

// sri.getInfo();

var djinfo = sri.getInfo.bind(dj)
djinfo()