// chemin/vers/models/Cours.js

const { DataTypes } = require('sequelize');
const sequelize = require('../chemin/vers/db');
const Professeur = require('./Professeur'); // Import du modèle Professeur

const Cours = sequelize.define('Cours', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    emploiDuTemps: {
        type: DataTypes.TEXT
    }
});

// Définir la relation Cours <-> Professeur
Cours.belongsTo(Professeur);

module.exports = Cours;
