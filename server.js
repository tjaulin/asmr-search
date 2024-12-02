const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
// const dotenv = require('dotenv');
// dotenv.config();
//OU :
require('dotenv').config();

const app = express();
const port = process.env.PORT || 7777;

app.use(cors());
app.use(express.json());
app.use(express.static('frontend/build'));

//Connexion à la base de données
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL.');
});

// Exemple d'API
app.get('/api/asmr', (req, res) => {
    res.send({
        message: 'API ASMR Search est en ligne !',
    });
    // res.send('API ASMR Search est en ligne !');
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'));
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});