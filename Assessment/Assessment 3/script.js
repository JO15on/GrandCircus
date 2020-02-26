"use strict"

function toggleColor(){
    if(document.body.style.background === "white") {
        document.body.style.background = "lightcoral";
    } else if(document.body.style.background = "lightcoral") {
        document.body.style.background = "white";
    }
}


document.querySelector("#add-box").addEventListener('click', addBox);
let i = 0;
function addBox(){
    i++;
    const addDiv = document.createElement('div');
    addDiv.innerText = i;
    addDiv.classList.add("box");
    addDiv.setAttribute('title', "I'm a box!");   
    addDiv.addEventListener('click', removeBox);
    document.body.append(addDiv);
}

function removeBox(e){
    e.target.remove();
}