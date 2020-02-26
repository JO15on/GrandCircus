const randomFacts = [
    'My name is Jon',
    'I am Asian',
    'I like sports',
    'University of Michigan is the best',
    'Pizza is the best',
    'I have lived 7 different cities',
];

const getRandomFact = () => {
    return randomFacts[Math.floor(Math.random() * Math.floor(randomFacts.length))];
}

module.exports = { randomFacts, getRandomFact };