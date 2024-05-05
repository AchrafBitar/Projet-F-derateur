const express = require('express');
const Utilisateur = require('../chemin/vers/modeles/utilisateur');

const router = express.Router();

// Route pour récupérer tous les utilisateurs
router.get('/utilisateurs', async (req, res) => {
    try {
        const utilisateurs = await Utilisateur.findAll();
        res.json(utilisateurs);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
});

module.exports = router;
