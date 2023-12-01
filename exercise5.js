"use strict";
console.log("WELCOME");
let age = 19;
let firstname = "sufyan";
let country = "pakistan";
if (age >= 19) {
    console.log("adult");
    if (country == "pakistan") {
        console.log(`hello ${firstname} you are from pakistan,you are eligible to vote`);
    }
    else {
        console.log(`hello${firstname}`);
    }
}
else if (age >= 13 && age <= 18) {
    console.log(`teenager`);
}
else {
    console.log(`child`);
}
