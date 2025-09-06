let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if (username === "myusername" && password === "mypassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again!");
    }
} 