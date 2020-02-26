const express = require('express');
const studentEndpoint = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static(__dirname + "/routes/public"));

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
});

app.use('/', studentEndpoint);