const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db/connection");

app.use(cors());
app.use(express.json());

const jogosRoutes = require("./routes/jogos");
app.use("/jogos", jogosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("API de Jogos funcionando! Use /jogos");
});
