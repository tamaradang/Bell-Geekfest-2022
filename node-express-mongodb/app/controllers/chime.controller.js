const db = require("../models");
const Chime = db.chimes;

// Create and Save a new Chime
exports.create = (req, res) => {
    // Validate request
    if (!req.body.description) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Chime
    const chime = new Chime({
      title: req.body.title,
      description: req.body.description,
      recipient: req.body.recipient,
      author: req.body.author
    });
  
    // Save Chime in the database
    chime
      .save(chime)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "An error occurred while creating the Chime."
        });
      });
  };

// Retrieve all Chimes from the database.
exports.findAll = (req, res) => {
    const description = req.query.description;
    var condition = description ? { description: { $regex: new RegExp(description), $options: "i" } } : {};
  
    Chime.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "An error occurred while retrieving the Chimes."
        });
      });
  };

// Find a single Chime with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Chime.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "No Chime found with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Chime with id=" + id });
      });
  };

// Update a Chime by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Chime.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Chime with id=${id}. Maybe Chime was not found!`
          });
        } else res.send({ message: "Chime was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Chime with id=" + id
        });
      });
  };

// Delete a Chime with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Chime.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Chime with id=${id}. Maybe Chime was not found!`
          });
        } else {
          res.send({
            message: "Chime was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Chime with id=" + id
        });
      });
  };

// Delete all Chimes from the database.
exports.deleteAll = (req, res) => {
    Chime.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Chimes were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Chimes."
        });
      });
  };