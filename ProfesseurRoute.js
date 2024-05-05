const express = require('express');
const Professeur = require('../chemin/vers/models/Professeur');

const router = express.Router();

// Route pour récupérer tous les professeurs
router.get('/professeurs', async (req, res) => {
    try {
        const professeurs = await Professeur.findAll();
        res.json(professeurs);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
});

// Route pour récupérer un professeur par son ID
router.get('/professeurs/:id', async (req, res) => {
    try {
        const professeur = await Professeur.findByPk(req.params.id);
        if (!professeur) {
            return res.status(404).send('Professeur non trouvé');
        }
        res.json(professeur);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
});

module.exports = router;
