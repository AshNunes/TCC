const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/database.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS jogos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      situacao TEXT NOT NULL,     -- "concluido" ou "pendente"
      avaliacao TEXT NOT NULL,    -- "positivo", "neutro", "negativo"
      observacao TEXT
    )
  `);
});

db.close();
