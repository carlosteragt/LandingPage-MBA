const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../inscricoes.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) return console.error('Erro ao conectar ao banco de dados:', err.message);
  console.log('Conectado ao banco de dados SQLite.');
});

db.run(`
  CREATE TABLE IF NOT EXISTS inscricoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT,
    telefone TEXT,
    cargo TEXT,
    formacao TEXT,
    faixa_salarial TEXT
  )
`);

module.exports = db;
