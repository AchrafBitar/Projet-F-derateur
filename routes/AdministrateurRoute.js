const express = require('express');
const Administrateur = require('../chemin/vers/models/Administrateur');

const router = express.Router();

// Créer un nouveau administrateur
router.post('/administrateurs', async (req, res) => {
    try {
        const nouveauAdministrateur = await Administrateur.create(req.body);
        res.status(201).json(nouveauAdministrateur);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
});

// Récupérer tous les administrateurs
router.get('/administrateurs', async (req, res) => {
    try {
        const administrateurs = await Administrateur.findAll();
        res.json(administrateurs);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
});

// Autres routes spécifiques aux administrateurs (mettre à jour, supprimer, etc.)

module.exports = router;
