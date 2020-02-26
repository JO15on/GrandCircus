"use strict"

let character = 0;
let direction = 1; // 1 = forward, -1 = reverse
function moveForward(distance) {
    return character = character + (distance * direction);
}

function moveBackward(distance) {
    return character = character - (distance * direction);
}

function turnAround() {
    direction = direction * -1;
   // return character = -(character);
}

function printLocation() {
    console.log(`This character is at ${character}`);
}

moveForward(5);
moveBackward(3);
printLocation();
turnAround();
moveForward(10);
moveBackward(5);
printLocation();
