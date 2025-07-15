const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
const musicasRoutes = require("./routes/musicas");

app.use("/api/musicas", musicasRoutes);

// Inicia o servidor
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
