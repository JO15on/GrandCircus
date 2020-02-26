"use strict"

function main() {
    const grow = document.getElementById("grow-me");
    grow.classList.add('big');

    const shrink = document.getElementById("shrink-me");
    shrink.classList.remove('big');

    const list = document.getElementsByTagName("li");
    console.log(list);

    const link = document.getElementsByClassName("link")[0];
    link.href="https://www.example.com";
    link.innerText="somewhere";

    document.getElementById("hide-me").style.display = "none";

    document.getElementById("show-me").style.display = "block";

    const name = document.getElementById("name").value;
    document.querySelector("h1").innerText=`Welcome ${name}`;
}