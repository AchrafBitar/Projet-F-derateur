const express = require('express');
const Etudiant = require('../chemin/vers/models/Etudiant');

const router = express.Router();

// Route pour récupérer tous les étudiants
router.get('/etudiants', async (req, res) => {
    try {
        const etudiants = await Etudiant.findAll();
        res.json(etudiants);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
});

// Route pour récupérer un étudiant par son ID
router.get('/etudiants/:id', async (req, res) => {
    try {
        const etudiant = await Etudiant.findByPk(req.params.id);
        if (!etudiant) {
            return res.status(404).send('Étudiant non trouvé');
        }
        res.json(etudiant);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
});

module.exports = router;
