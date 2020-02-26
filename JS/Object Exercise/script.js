"use strict"

class Mammal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.eyes = 2;
        this.legs = 4;
    }

    breathes() {
        console.log('whew');
    }
    
}

class Cat extends Mammal {
    constructor(breathes, eyes, legs) {
        super(breathes, eyes, legs);
            this.speaks = "Meow";
            this.fall = "Landed on Feet";
            this.lives = 9;
            this.claws = "Will kill you";
    }
    catNip() {
       console.log('Going Crazy!!!');
        }
}


const catptian = new Cat('Catptian Meow', 3);  
catptian.breathes();
catptian.catNip();