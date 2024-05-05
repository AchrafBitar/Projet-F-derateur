const express = require('express');
const utilisateursRoutes = require('./chemin/vers/routes/UtilisateursRoutes');
const professeursRoutes = require('./chemin/vers/routes/ProfesseursRoutes');
const etudiantsRoutes = require('./chemin/vers/routes/EtudiantsRoutes');
const administrateursRoutes = require('./chemin/vers/routes/AdministrateursRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Monter les routes
app.use('/api', utilisateursRoutes);
app.use('/api', professeursRoutes);
app.use('/api', etudiantsRoutes);
app.use('/api', administrateursRoutes);

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
