const express = require('express');
const router = express.Router();
const db = require('./database');

router.post('/inscricao', (req, res) => {
  const { nome, email, telefone, cargo, formacao, faixa_salarial } = req.body;

  if (!nome || !email || !telefone || !cargo || !formacao || !faixa_salarial) {
    return res.status(400).json({ mensagem: "Todos os campos são obrigatórios." });
  }

  const sql = `
    INSERT INTO inscricoes (nome, email, telefone, cargo, formacao, faixa_salarial)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.run(sql, [nome, email, telefone, cargo, formacao, faixa_salarial], function (err) {
    if (err) {
      console.error("Erro ao inserir dados:", err.message);
      return res.status(500).json({ mensagem: "Erro ao salvar a inscrição." });
    }

    res.status(201).json({ mensagem: "Inscrição realizada com sucesso!" });
  });
});

module.exports = router;
