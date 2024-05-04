// chemin/vers/models/Etudiant.js

const { DataTypes } = require('sequelize');
const sequelize = require('../chemin/vers/db');
const Utilisateur = require('./Utilisateur'); // Import du modèle Utilisateur

const Etudiant = sequelize.define('Etudiant', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    niveau: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

// Définir la relation Etudiant <-> Utilisateur
Etudiant.belongsTo(Utilisateur);

module.exports = Etudiant;
