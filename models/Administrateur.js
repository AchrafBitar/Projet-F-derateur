// chemin/vers/models/Administrateur.js

const { DataTypes } = require('sequelize');
const sequelize = require('../chemin/vers/db');
const Utilisateur = require('./Utilisateur'); // Import du modèle Utilisateur

const Administrateur = sequelize.define('Administrateur', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

// Définir la relation Administrateur <-> Utilisateur
Administrateur.belongsTo(Utilisateur);

module.exports = Administrateur;
