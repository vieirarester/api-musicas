const express = require('express');
const app = express();
const PORT = 8080;

// Importa as rotas
const musicasRoutes = require('./routes/musicas');

// Usando rotas
app.use('/api/musicas', musicasRoutes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
