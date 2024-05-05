const express = require('express');
const Administrateur = require('../chemin/vers/models/Administrateur');

const router = express.Router();

// Route pour récupérer tous les administrateurs
router.get('/administrateurs', async (req, res) => {
    try {
        const administrateurs = await Administrateur.findAll();
        res.json(administrateurs);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
});

// Route pour récupérer un administrateur par son ID
router.get('/administrateurs/:id', async (req, res) => {
    try {
        const administrateur = await Administrateur.findByPk(req.params.id);
        if (!administrateur) {
            return res.status(404).send('Administrateur non trouvé');
        }
        res.json(administrateur);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
});

module.exports = router;
