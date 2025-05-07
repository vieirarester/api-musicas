const express = require('express');
const router = express.Router();

// Simulando um banco de dados com um array
let musicas = [
    { titulo: "Believer", artista: "Imagine Dragons" },
    { titulo: "Judas", artista: "Lady Gaga" },
    { titulo: "Billie Jean", artista: "Michael Jackson" },
    { titulo: "Sugar", artista: "Maroon 5" },
    { titulo: "Diamonds", artista: "Rihanna" }
];

// GET /api/musicas
router.get('/', (req, res) => {
    res.status(200).json(musicas);
});

// POST /api/musicas
router.post('/', (req, res) => {
    const novaMusica = req.body;

    // Simples verificação
    if (!novaMusica.titulo || !novaMusica.artista) {
        return res.status(400).json({ erro: 'Título e artista são obrigatórios.' });
    }

    res.status(201).json(novaMusica);
});

module.exports = router;
