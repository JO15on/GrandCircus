function runCode (){
    let inputText = document.getElementById("input").value;
    const newLi = document.createElement("li");
    newLi.innerHTML = inputText;
        newLi.addEventListener('dblclick', e => {
        newLi.remove();
    });
    if (document.getElementById("fruit").checked == true) {
        fruitListOutput.append(newLi);
    } else if (document.getElementById("vegetable").checked == true) {
        vegetableListOutput.append(newLi);
    }
}