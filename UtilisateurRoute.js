const express = require('express');
const Utilisateur = require('../chemin/vers/models/Utilisateur');

const router = express.Router();

// Créer un nouvel utilisateur
router.post('/utilisateurs', async (req, res) => {
    try {
        const nouvelUtilisateur = await Utilisateur.create(req.body);
        res.status(201).json(nouvelUtilisateur);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
});

// Récupérer tous les utilisateurs
router.get('/utilisateurs', async (req, res) => {
    try {
        const utilisateurs = await Utilisateur.findAll();
        res.json(utilisateurs);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
});

// Récupérer un utilisateur par son ID
router.get('/utilisateurs/:id', async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findByPk(req.params.id);
        if (!utilisateur) {
            return res.status(404).send('Utilisateur non trouvé');
        }
        res.json(utilisateur);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
});

// Mettre à jour un utilisateur
router.put('/utilisateurs/:id', async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findByPk(req.params.id);
        if (!utilisateur) {
            return res.status(404).send('Utilisateur non trouvé');
        }
        await utilisateur.update(req.body);
        res.json(utilisateur);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
});

// Supprimer un utilisateur
router.delete('/utilisateurs/:id', async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findByPk(req.params.id);
        if (!utilisateur) {
            return res.status(404).send('Utilisateur non trouvé');
        }
        await utilisateur.destroy();
        res.send('Utilisateur supprimé avec succès');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
});

module.exports = router;
