const http = require("http");

const randomFacts = [
    'My name is Jon',
    'I am Asian',
    'I like sports',
    'University of Michigan is the best',
    'Pizza is the best',
    'I have lived 7 different cities',
];

http.createServer( (req, res) => {
    const facts = randomFacts[Math.floor(Math.floor(Math.random() * Math.floor(randomFacts.length)))];
    res.writeHead(200, {"Content-type": "text/html"});
    res.write(`
        <html>
        <h1>Random Facts about Jon</h1>
        <p>Random Fact: ${facts}</p>
        </html>
    `);
    res.end();
}).listen(8888);