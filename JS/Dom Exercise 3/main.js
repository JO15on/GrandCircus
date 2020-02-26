"use strict"

document.getElementById("section");
const section1 = document.querySelector("#section");
document.getElementsByTagName("li").getElementById("second");
document.getElementsByTagName("ol").getElementById("third");

section1.innerText='hello';

const footer = document.getElementById("footer");
footer.classList.add("main");
footer.classList.remove("main");

const li = document.getElementsByTagName("li");
const ul = li.createElement("li");
ul.appendChild(document.createTextNode("four"));
li.appendChild(li);

const ol = li.getElementsByTagName('ol');
for(i=0; i < ol.length -1; i++) {
    ol[i].style.backgroundColor = "green";
}

footer.remove("div");

