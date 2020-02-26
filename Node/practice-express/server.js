const express = require('express');
// import { randomFacts } from './facts'

const app = express();
// console.log(randomFacts);

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

// get random fact
app.get( '/facts', (req, res) => {
    res.json("Getting random fact");
});

// get all facts

// add random fact

// update random fact

// delete random fact by index