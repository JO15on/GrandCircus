for (let i=1; i<=10; i++) {
    console.log(i);
}

for (let i=10; i>=0; i--) {
    console.log(i);
}

let i=1;
while (i <= 10) {
    console.log(i);
    i++;
}

let i=10;
while (i > 0) {
    console.log(i);
    i--;
}

let i=1;
do {
    console.log (i);
    i++;
} while (i <=10);

let i=10;
do {
    console.log (i);
    i--;
} while (i > 0);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const array of numbers){
    console.log(array);
}

let str = "jon";
while (str.length < 10) {
    console.log(str);
    str = " " + str;
}

function recursion(myArray, index){
    if(index===myArray.length-1) {
        return myArray[index];
    } else {
        console.log(recursion(myArray, index: index+1));
        return myArry[index];
    }
}

const start = [1,2,3,4,5,6,7,8,9,10];
console.log(recursion(start, index:0));