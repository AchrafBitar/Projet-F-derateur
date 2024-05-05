const express = require('express');
const Professeur = require('../chemin/vers/models/Professeur');

const router = express.Router();

// Créer un nouveau professeur
router.post('/professeurs', async (req, res) => {
    try {
        const nouveauProfesseur = await Professeur.create(req.body);
        res.status(201).json(nouveauProfesseur);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
});

// Récupérer tous les professeurs
router.get('/professeurs', async (req, res) => {
    try {
        const professeurs = await Professeur.findAll();
        res.json(professeurs);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
});

// Autres routes spécifiques aux professeurs (mettre à jour, supprimer, etc.)

module.exports = router;
