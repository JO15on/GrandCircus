function getAreaOfCircle(radius) {
    let areaCircle =  Math.PI*(radius*radius);
    console.log(areaCircle);
}

getAreaOfCircle(5);

// Arrow Function
// const getAreaOfCircle = radius => (Math.PI*(radius*radius));

// console.log(getAreaOfCircle(5));

function getCircumferenceOfCircle(radius) {
    let circumference = 2*Math.PI*radius;
    console.log(circumference);
}

getCircumferenceOfCircle(5);

// Arrow Function
// const getCircumferenceOfCircle = radius => (2*Math.PI*radius);
// console.log(getCircumferenceOfCircle(5));

// function getAreaOfSquare(base, height) {
//     let areaSquare = base*height;
//     console.log(areaSquare);
// }

// getAreaOfSquare(5,5);

// function getAreaOfTriangle(base,  height) {
//     let areaTri = .5*base*height;
//     console.log(areaTri);
// }

// getAreaOfTriangle(5,5);