const db = require("../models");
const Person = db.persons;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    console.log({name: req.body});
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }


    // Create a Person
    const person = new Person({
        name: req.body.name,
        fathers_name: req.body.fathers_name,
        mothers_name: req.body.mothers_name,
        married: req.body.married ? req.body.married : false
    });

    // Save Person in the database
    person
        .save(person)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Person."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

    Person.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving persons."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Person.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Person with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Person with id=" + id });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Person.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Person with id=${id}. Maybe Tutorial was not found!`
                });
            } else res.send({ message: "Person was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Person with id=" + id
            });
        });
};