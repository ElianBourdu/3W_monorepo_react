const express = require('express');
const router = express.Router();
const Agriculteur = require('../model/Agriculteur');
const Joi = require('joi');

const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

router.post('/login', async (req, res) => {
    try {
        const { error } = schema.validate(req.body);

        if (error) {
            return res.status(400).send({ error: error.details[0].message });
        }

        const agri = await Agriculteur.findOne({ email: req.body.email, password: req.body.password });

        if (!agri) {
            return res.status(401).send({ error: "E-mail ou mot de passe incorrect." });
        }

        res.status(200).send({ message: "Connexion réussie" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Une erreur s'est produite lors de la connexion." });
    }
});

module.exports = router;
