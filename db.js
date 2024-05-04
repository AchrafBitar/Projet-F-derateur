const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ENSMRLearnDB', 'utilisateur', 'mot_de_passe', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
