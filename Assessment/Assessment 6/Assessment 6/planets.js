const express = require("express");
const planetEndpoint = express.Router();

const planets = [
    { name: "Mercury", color: "Gray" },
    { name: "Venus", color: "Yellow" },
    { name: "Earth", color: "Blue" },
    { name: "Mars", color: "Red" } 
];

// returns an array of planets
planetEndpoint.get('/planets', (req, res) => {
    res.json(planets);
});

// returns a single array of planets
planetEndpoint.get('/planets/:name', (req, res) => {
    const planet = planets.find( planetName => planetName.name == req.params.name);

    if(!planet){
        res.status(404);
        res.json("Not Found");
    } else {
        res.json(planets.filter(planet => planet.name == req.params.name));
    }
});

// added a new planet to the array
planetEndpoint.post('/planets', (req, res) => {
    const body = req.body.planet;
    planets.push(body);
    res.json("Added Planet");
});

// deleted a planet from the array
planetEndpoint.delete('/planets/:name', (req, res) => {
    const name = req.params.name;
    const index = planets.findIndex( planet => planet.name == name );
    planets.splice(index, 1);
    res.json("Boom!");
    console.log(res.json("Boom!"));
});

module.exports = planetEndpoint;