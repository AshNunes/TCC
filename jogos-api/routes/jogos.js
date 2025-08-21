const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// GET todos os jogos
router.get("/", (req, res) => {
  db.all("SELECT * FROM jogos", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// POST novo jogo
router.post("/", (req, res) => {
  const { nome, situacao, avaliacao, observacao } = req.body;
  db.run(
    "INSERT INTO jogos (nome, situacao, avaliacao, observacao) VALUES (?, ?, ?, ?)",
    [nome, situacao, avaliacao, observacao],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// PUT atualizar jogo
router.put("/:id", (req, res) => {
  const { nome, situacao, avaliacao, observacao } = req.body;
  db.run(
    "UPDATE jogos SET nome = ?, situacao = ?, avaliacao = ?, observacao = ? WHERE id = ?",
    [nome, situacao, avaliacao, observacao, req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ updated: this.changes });
    }
  );
});

// DELETE excluir jogo
router.delete("/:id", (req, res) => {
  db.run("DELETE FROM jogos WHERE id = ?", [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

module.exports = router;
