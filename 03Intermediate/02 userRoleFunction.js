/*
Define a function that can answer the role of a user. 
A user can be on following roles:
admin - with all access
subadmin - with acccess to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/

var getUserRole = function (name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break;
        case "subadmin":
            return `${name} is sub-admin with acccess to create/delete courses`
            break;
        case "testprep":
            return `${name} is a testprep with access to create/delete tests`
            break;
        case "user":
            return `${name} is a user to consume all content `
            break;
        default:
            return `${name} is a trial user`
            break;
    }
}

console.log(getUserRole("sri", "subadmin"));

var getRole = getUserRole("Bala", "user");
console.log(getRole);