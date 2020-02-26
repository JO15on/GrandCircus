"use strict"

let name = ['Jon', 'BJ', 'Roger'];
let health = [100, 100, 100];
let opponent = "Opponent";
let opponentHealth = 150;

console.log(`${name[1]}: ${health[1]} ${name[2]}: ${health[2]}, ${name[3]}: ${health[3]}, ${opponent}: ${opponentHealth}`);

function submit() {
    confirm("Do you want to play a game");
    let name = prompt ("Please pick a character 1 to 3");
    while (name === "") {
        alert("Please pick a character 1 to 3");
        name = prompt("Please pick a character 1 to 3");
    }
    alert("Hello " + name);
    return name;
}


while(health > 0 && opponentHealth > 0) {
    let randomNumber = getRandomInt(0,5);
    health = health - randomNumber;
    opponentHealth = opponentHealth - randomNumber;
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()*5);
    }
    console.log(`${name} has ${health} left`);
    console.log(`${opponent} has ${opponentHealth} left`);
}

if(health <= 0) {
    if (opponentHealth <= 0) {
        alert("both players are tied");
    }  else if {
        alert("Opponent is the winner!");
    } else {
        alert(`${name} is the winner!`);
    }  
}