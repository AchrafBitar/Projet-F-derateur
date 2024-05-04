// chemin/vers/models/Professeur.js

const { DataTypes } = require('sequelize');
const sequelize = require('../chemin/vers/db');
const Utilisateur = require('./Utilisateur'); // Import du modèle Utilisateur

const Professeur = sequelize.define('Professeur', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    matiereEnseignee: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Définir la relation Professeur <-> Utilisateur
Professeur.belongsTo(Utilisateur);

module.exports = Professeur;
