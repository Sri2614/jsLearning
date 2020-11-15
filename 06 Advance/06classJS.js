class User{
    constructor(name, email){
        this.name = name;
        this.email = email;    
    }
    #courseList = [];

    getInfo(){
        return {name: this.name, email: this.email}
    }
    // Setter
    enrollCourse(name){
        this.#courseList.push(name);
    }
    // Getter
    getCourseList(){
        return this.#courseList;
    }
    login(){
        return "You are logged in";
    }
}

class SubAdmin extends User {
    constructor(name, email){
        super(name, email);
    }
    getAdminInfo(){
        return "I am subadmin";
    }
    login(){
        return "Login for admin only"
    }
}

module.exports = User;

const rock = new User("rock", "rock@rock.com");
// console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp")
// console.log(rock.getCourseList());
// console.log(rock.courseList);

const tom = new SubAdmin("sri", "srilco.dev");
console.log(tom.getAdminInfo());
console.log(tom.getInfo());
console.log(tom.login());