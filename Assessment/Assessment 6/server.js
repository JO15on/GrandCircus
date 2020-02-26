const express = require('express');
const planetEndpoint = require('./planets');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname + "/planets/public"));

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
});

app.use('/', planetEndpoint);

