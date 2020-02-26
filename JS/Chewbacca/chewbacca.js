// 1. Construct objects by prompting users for the following information: name, flying skill, Dejarik skill, and how afraid of the Galactic Empire they are.
// Aside from the name, all other answers will be a
// number between 1-10.
// 2. Each object will be inserted into an array to keep
// track of all of the potential friends.
// 3. Figure out a ranking system for who is the best
// match for Chewbacca based on their stats.
// 4. Output the best and worst candidates for
// Chewbacca's new friend.
const container = document.querySelector(".container")
class CharacterFactory {
    constructor() {
        this.friendArray = [];
    }

    makeCharacter = () => { //Method that creates friends. 
        const name = prompt('What is your name?', 'name');
        const flyingSkill = prompt('What is your flying skill?', '1-10');
        const dejarikSkill = prompt('What is your Dejarik skill?', '1-10');
        const empireFear = prompt('How afraid are you from the Empire?', '1-10');
        let thisCharacter = new Character(name, flyingSkill, dejarikSkill, empireFear);
        this.friendArray.push(thisCharacter.toJSON()); // Send this to the classes friendArray and ask if the person wants to create another friend. 

        const goAgain = prompt("Do you wanna make another friend?", "yes/no");
        if (goAgain === "yes") {
            this.makeCharacter();
        } else {
            let dudeArray;
            dudeArray = this.friendArray.sort((a, b)=> {
                return b.total - a.total;
            })
            container.innerHTML = `
            ${
                dudeArray.map((dude, i)=> {
                    return `<div class="inner-container">
                                ${i === 0 ? `<h1>---WINNER!!!---</h1>` : ''}
                                <h3>${dude.name}</h3>
                                <h4>Flying Skill: ${dude.flyingSkill}</h4>
                                <h4>Dejarik skill: ${dude.dejarikSkill}</h4>
                                <h4>Fear of the Empire: ${dude.empireFear}</h4>
                                <h4>Total Points: ${dude.total}</h4>
                            </div>`
                })
            }`
        }
    }
}

class Character { // This constructs the character to add to the array. 
    constructor(name, flyingSkill, dejarikSkill, empireFear) {
        this.name = name;
        this.flyingSkill = flyingSkill;
        this.dejarikSkill = dejarikSkill;
        this.empireFear = empireFear;
        this.total = Number(this.flyingSkill) + Number(this.dejarikSkill) + Number(this.empireFear)
    }
    toJSON(){
        return {
            name: this.name,
            flyingSkill: this.flyingSkill,
            dejarikSkill: this.dejarikSkill,
            empireFear: this.empireFear,
            total: this.total
        }
        
    }
}

let buildChar = new CharacterFactory(); // Create the class to start building characters/adding them to arrays. 
buildChar.makeCharacter(); // Initialize the method to make the thing work. 
