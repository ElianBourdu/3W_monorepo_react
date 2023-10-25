const express = require('express');
const router = express.Router();
const Agriculteur = require('../model/Agriculteur');
const Joi = require('joi');

const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    localisation: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

router.post('/signups', async (req, res) => {
    try {
        const { error } = schema.validate(req.body);

        if (error) {
            return res.status(400).send(
                error.details[0].message
                );
        }

        const repeatAgriculteur = await Agriculteur.find({ email: req.body.email });

        if (repeatAgriculteur) {
            return res.status(400).send("Cet email est déjà utilisé par un utilisateur ou un agriculteur.");
        }

        const agri = new Agriculteur({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            localisation: req.body.localisation,
            email: req.body.email,
            password: req.body.password
        });

        await agri.save();
        res.status(201).send("Inscription réussie");
    } catch (error) {
        res.status(500).send("Une erreur s'est produite lors de l'inscription.");
    }
});

module.exports = router;
