const express = require("express");
const invitadoSchema = require("../models/invitados");

const router = express.Router();


// Create user
router.post("/invitados", (req, res) => {
    const invitado = invitadoSchema(req.body);
    invitado
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  

// Get all users
router.get("/invitados", (req, res) => {
  invitadoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get a users
router.get("/invitados/:id", (req, res) => {
  const { id } = req.params;
  invitadoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get a users
router.get("/invitados/buscar/:id", (req, res) => {
  const { id } = req.params;
  invitadoSchema
    .find({id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Delete a user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  invitadoSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
