const express = require('express');
const router = express.Router();
const Agriculteur = require('../model/Agriculteur');

router.get('/search', async (req, res) => {
    const { localisation, fruits } = req.query;

    try {
        let query = {}; 

        if (localisation) {
            query.localisation = localisation;
        }
        if (fruits) {
            query.fruits = { $in: fruits.split(',') };
        }
        const agri = await Agriculteur.find(query);
        res.status(200).send(agri);
    } catch (error) {
        console.error(error);
        res.status(500).send("Une erreur s'est produite lors de la recherche des agriculteurs.");
    }
});

module.exports = router;
