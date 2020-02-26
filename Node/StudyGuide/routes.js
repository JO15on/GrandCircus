const express = require("express");
const studentEndpoint = express.Router();

const getRandomStudent = () => {
    return students[Math.floor(Math.random() * Math.floor(students.length))];
}

let students = [
    { id:1, firstName: "Obi-Wan", lastName: "Kenobi" },
    { id:2, firstName: "Boba", lastName: "Fett" },
    { id:3, firstName: "Luke", lastName: "Skywalker" },
    { id:4, firstName: "Anakin", lastName: "Skywalker" },
    { id:5, firstName: "Jango", lastName: "Fett" }
    ];

studentEndpoint.get('/students', (req, res) => {
    res.json(students);
});

studentEndpoint.get('/students/:id', (req, res) => {
    const person = students.find( studentName => studentName.id == req.params.id);

    if(!person){
        res.status(404);
        res.json("There's no student to be found, dummy!")
    } else {
        res.json(students[req.params.id]);
    }
});

studentEndpoint.get('/students/last-name/:lastName', (req, res) => {
    res.json(students.filter(student => student.lastName == req.params.lastName));
});

studentEndpoint.get('/', (req, res) => {
    res.json(getRandomStudent());
});

studentEndpoint.put('/students/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body.data;

    const newStudent = {
        id: id,
        firstName: body.firstName,
        lastName: body.lastName,
    };

    const index = students.findIndex( student => student.id == id );

    if(!id){
        return res.json(students);
    } else if(id){
        students.splice(index, 1, newStudent);
        res.json("Updating students");
    } else {
        res.status(404);
        res.json("Don't be a dummy");
    }
});

studentEndpoint.post('/students', (req, res) => {
    const body = req.body.student;
    if(students){
        students.push(body);
        res.status(201);
        res.json("Added student");
    } else if(students === students) {
        res.status(409);
        res.json("Student already exist in the array, dummy!");
    } else {
        res.status(400);
        res.json("You're missing one of the data, dummy!");
    }
});

studentEndpoint.delete('/students/:id', (req, res) => {
    const id = req.params.id;
    const index = students.findIndex( student => student.id == id );

    if(!id){
        res.status(400);
        res.json("missing an id, dummy!");
    } else {
        students.splice(index, 1);
        res.json("Student has been deleted");
    }
});

module.exports = studentEndpoint;