"use strict"

const box = document.getElementById("box1");
box.style.backgroundColor = "green";

const box1 = document.getElementById("box1s");
box1.style.fontSize = "44px";

function removeCircle() {
    const circle = document.querySelector(".circle");
    circle.remove();
}

// function clearFinished() {
//     const chore = document.querySelector("#box5 ul .done");
//     chore.addEventListener('dblclick', () => {
//         chore.remove();
//     })
// }

function clearFinished() {
    chore.addEventListener('dblclick', () => {
        let chore = document.querySelector("#box5 .done");
        const done = document.querySelector("#box5s");
        done.appendChild(chore);
    });
}

// document.querySelector('#move').addEventListener('click', () => {
//     const move = document.querySelector('#move-me');
//     const ul2 = document.querySelector('#ul-2');

//     ul2.appendChild(move);
// })

// function clearFinished() {
//     const chore = document.querySelector("#box5 ul .chore done");
//     for (element of chore) {
//         chore.addEventListener('dblclick', () => {
//             const chore = document.querySelector('#box5 .chore done');

//             for(element of chore){
//                 element.remove();
//             }
//         })
//     }
//     //     chore.getElementsByClassName("chore done").remove(); 
//     //     let complete = chore.getElementById("box5s");
//     //     let chore1 = chore.getElementsByClassName("chore done").createElement("li");  
//     //     complete.getElementsByClassName("chore done").appendChild(chore1);
//     // });
// }

function addChore(){
    let addChore = document.querySelectorAll("#box5 ul")[0];
    const newLi = document.createElement("li");
    newLi.innerText = "Wash";
    addChore.appendChild(newLi);
}

function doneChore(){
    let done = document.querySelectorAll("box5 ul")[0];
    done.addEventListener('dblclick', e => {
        done.getElementsByClassName("chore undone").remove();
    });
}