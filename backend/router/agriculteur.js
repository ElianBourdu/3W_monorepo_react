const express = require('express');
const router = express.Router();
const Agriculteur = require('../model/Agriculteur');



router.get('/agriculteurs', async (req, res) => {
    try {
       const agriculteurs = await Agriculteur.find();
       res.send(agriculteurs);
      } catch (error) {
        res.status(500).send("Une erreur s'est produite lors de la récupération des agriculteurs.");
      }
  })
  
    router.get('/agriculteurs/:id', async (req, res) => {
      const agri = await Agriculteur.findById(req.params.id);
      if (!agri) {
         return res.sendStatus(404);
        }
        res.send(agri);
    });
  
    router.post('/agriculteurs', async (req, res) => {
      try {
          if (!req.body.firstName || !req.body.lastName || !req.body.localisation || !req.body.email || !req.body.password) {
              return res.status(400).send('Tous les champs sont requis.');
          }
          const agri = new Agriculteur({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              localisation: req.body.localisation,
              email: req.body.email,
              password:req.body.password
          });
  
          await agri.save();
          res.status(201).send(agri);
          } catch (error) {
              res.status(500).send("Une erreur s'est produite lors de la création de l'agriculteur.");
          }
         });
  
    router.put('/agriculteurs/:id', async (req, res) => {
      try {
        const agri = await Agriculteur.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (agri) {
          res.send(agri);
        } else {
          res.status(404).send('Agriculteur non trouvé.');
        }
          } catch (error) {
            res.status(500).send("Une erreur s'est produite lors de la mise à jour de l'agriculteur.");
          }
    });
  
  router.delete('/agriculteurs/:id', async (req, res) => {
    try {
       const agri = await Agriculteur.findByIdAndDelete(req.params.id);
       const message = agri ? 'Agriculteur supprimé avec succès.' : 'Agriculteur non trouvé.';
       res.status(agri ? 204 : 404).send(message);
        } catch (error) {
          res.status(500).send("Une erreur s'est produite lors de la suppression de l'agriculteur.");
        }
  });
module.exports = router;