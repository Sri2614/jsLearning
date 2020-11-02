
var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = false;

if(isLoggedIn && isEmailVerified || cardInfo ){
    console.log("Allow user to make a purchase");
}
else{
    console.log("You are not allowed to purchase.");
}