var user = "admin";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("Access to create/delete courses");
        break;
    case "testpreps":
        console.log("Access to create and delete tests");
        break;
    case "user":
        console.log("Access to consume content");
        break;
    default:
        console.log("Trial user");
        break;
}