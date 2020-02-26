const name = "Jon Olson ";
const age = 32;
const birthday = "January 18";
const detroitGC = true || false;
const lifeEvents = ["I was born in Seoul, South Korea", "I went to the University of Michigan", "I went to Xavier University for Grad School", "I am taking after hours front end bootcamp"];

if (detroitGC === false) {
    console.log('My name is '+ name + ' and I am a student at Grand Circus in Grand Rapids, Michigan.'+ " " + 'I am currently ' + age + ' years old and my birthday is on '+ birthday + '.');
} else {
    console.log('My name is '+ name + 'and I am a student at Grand Circus in Detroit, Michigan.' +" " + 'I am currently ' + age + ' years old and my birthday is on '+ birthday + '.');
}

for (let i=0; i<=lifeEvents.length-1; i++) {
    console.log(lifeEvents[i]);
}

var counter = 0;
while (true) {
    counter++;
    let randomNumber=Math.floor(Math.random()*11);
    if (randomNumber !== 5){
        console.log(randomNumber + " !== 5");
    } else {
        console.log("5 === 5. It took " + counter + " iterations to randomly generate the number 5.");
        break;
    }
}