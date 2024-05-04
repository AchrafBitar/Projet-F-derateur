CREATE TABLE Utilisateur (
    id INT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    role ENUM('Professeur', 'Etudiant', 'Administrateur') NOT NULL
);
CREATE TABLE Professeur (
    id INT PRIMARY KEY,
    matiereEnseignee VARCHAR(255) NOT NULL,
    FOREIGN KEY (id) REFERENCES Utilisateur(id)
);
CREATE TABLE Etudiant (
    id INT PRIMARY KEY,
    niveau INT NOT NULL,
    FOREIGN KEY (id) REFERENCES Utilisateur(id)
);
CREATE TABLE Administrateur (
    id INT PRIMARY KEY,
    FOREIGN KEY (id) REFERENCES Utilisateur(id)
);
CREATE TABLE Document (
    id INT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    description TEXT,
    id_professeur INT NOT NULL,
    emploiDuTemps TEXT,
    FOREIGN KEY (id_professeur) REFERENCES Professeur(id)
);
CREATE TABLE Message (
    id INT PRIMARY KEY,
    id_expediteur INT NOT NULL,
    id_destinataire INT NOT NULL,
    contenu TEXT,
    horodatage TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_expediteur) REFERENCES Utilisateur(id),
    FOREIGN KEY (id_destinataire) REFERENCES Utilisateur(id)
);
CREATE TABLE EspaceCollaboratif (
    id INT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    description TEXT,
    FOREIGN KEY (id) REFERENCES Document(id)
);


