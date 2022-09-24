module.exports = app => {
    const chimes = require("../controllers/chime.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Chime
    router.post("/", chimes.create);
  
    // Retrieve all Chimes
    router.get("/", chimes.findAll);
  
    // Retrieve a single Chime with id
    router.get("/:id", chimes.findOne);
  
    // Update a Chime with id
    router.put("/:id", chimes.update);
  
    // Delete a Chime with id
    router.delete("/:id", chimes.delete);
  
    // Create a new Chime
    router.delete("/", chimes.deleteAll);
  
    app.use('/api/chimes', router);
  };