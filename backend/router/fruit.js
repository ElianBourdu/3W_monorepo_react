const express = require('express');
const router = express.Router();
const Fruit = require('../model/Fruit');


router.get('/fruits', async (req, res) => {
    try {
       const fruits = await Fruit.find();
       res.send(fruits);
      } catch (error) {
        res.status(500).send("Une erreur s'est produite lors de la récupération des fruits.");
      }
  })


module.exports = router;