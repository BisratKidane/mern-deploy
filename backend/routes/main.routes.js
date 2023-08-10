module.exports = app => {
    const mainController = require("../controllers/main.controller");
  
    const router = require("express").Router();

    router.get("/", mainController.getData);
  
    app.use('/', router);
  };