const { DataTypes } = require('sequelize');
const sequelize = require('');

const Utilisateur = sequelize.define('Utilisateur', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('Professeur', 'Etudiant', 'Administrateur'),
        allowNull: false
    }
});

module.exports = Utilisateur;
