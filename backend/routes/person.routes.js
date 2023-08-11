module.exports = app => {
    const persons = require("../controllers/person.controller");
  
    const router = require("express").Router();

    router.post("/", persons.create);
    router.get("/", persons.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", persons.findOne);
    app.use('/persons', router);
  };