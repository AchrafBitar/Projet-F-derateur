const express = require('express');
const Etudiant = require('../chemin/vers/models/Etudiant');

const router = express.Router();

// Créer un nouvel étudiant
router.post('/etudiants', async (req, res) => {
    try {
        const nouvelEtudiant = await Etudiant.create(req.body);
        res.status(201).json(nouvelEtudiant);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
});

// Récupérer tous les étudiants
router.get('/etudiants', async (req, res) => {
    try {
        const etudiants = await Etudiant.findAll();
        res.json(etudiants);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
});

// Autres routes spécifiques aux étudiants (mettre à jour, supprimer, etc.)

module.exports = router;
