var username;
var userresult;

username = prompt("What is your name?");
if (username ==  "") {
    document.getElementById("name").innerHTML = "Anonymous";
} else{
    document.getElementById("name").innerHTML = username;
}


var rand = Math.floor(Math.random() * 5);
if (rand == 0) {
    userresult = " great fortune";
}
if (rand == 1) {
    userresult = "middle fortune";
}
if (rand == 2) {
    userresult = "small fortune";
}
if (rand == 3) {
    userresult = "fortune";
}
if (rand == 4) {
    userresult = "misfortune";
}
document.getElementById("result").innerHTML = userresult;