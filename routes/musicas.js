const express = require('express');
const router = express.Router();

// Simulando um banco de dados com um array
const musicas = [
    { titulo: "Believer", artista: "Imagine Dragons" },
    { titulo: "Judas", artista: "Lady Gaga" },
    { titulo: "Billie Jean", artista: "Michael Jackson" },
    { titulo: "Sugar", artista: "Maroon 5" },
    { titulo: "Diamonds", artista: "Rihanna" }
];

// Rota GET para listar músicas
router.get('/', (req, res) => {
    res.status(200).json(musicas);
});

module.exports = router;
