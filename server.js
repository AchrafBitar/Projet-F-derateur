const express = require('express');
const sequelize = require('./chemin/vers/db');

// Import routes
const utilisateursRoutes = require('./chemin/vers/routes/UtilisateursRoutes');
const professeursRoutes = require('./chemin/vers/routes/ProfesseursRoutes');
const etudiantsRoutes = require('./chemin/vers/routes/EtudiantsRoutes');
const administrateursRoutes = require('./chemin/vers/routes/AdministrateursRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mount the routes
app.use('/api', utilisateursRoutes);
app.use('/api', professeursRoutes);
app.use('/api', etudiantsRoutes);
app.use('/api', administrateursRoutes);

// Synchronize models with the database
sequelize.sync()
    .then(() => {
        console.log('Database synchronized');
        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to synchronize the database:', err);
    });
