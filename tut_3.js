// learning string in js and also some methods
let favActorFirstName= "Darling";
let favActorLastName= "Prabhas";
let fullName= favActorFirstName + " " + favActorLastName;
console.log(fullName);
let uppercase = fullName.toUpperCase()
console.log(uppercase);
let message= `my favourite actor name is ${uppercase}. he is india's biggest super star.`
message+=`his best film is bahubali.`
console.log(message)


// condidtional statement in javascript
let password= prompt("enter a password");
if(password.length == 8){
    console.log("Welcome");
}else if(password.length <= 8){
    console.log("password is too short");
}else if(password.length >=15){
    console.log("password is too long");
}else{
    console.log("please provide a password");
}

// switch statement in javascript
let day = "noday";
switch (day) {
    case "monday":
        console.log("monday");
        break;
    case "tuesday":
        console.log("tuesday");
        break;
    case "wednedsday":
        console.log("wednesday");
        break;
    case "thursday":
        console.log("thursday");
        break;
    case "friday":
        console.log("friday");
        break;
    case "saturday":
        console.log("saturday");
        break;
    case "sunday":
        console.log("sunday");
        break;
    default:
        console.log("enter valid day");
        break;
}