const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg'); // Importe Pool do pacote pg

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuração do banco de dados PostgreSQL
const pool = new Pool({
  user: 'seu_usuario', // substitua pelo seu usuário do PostgreSQL
  host: 'localhost',
  database: 'seu_banco_de_dados', // substitua pelo nome do seu banco de dados
  password: 'sua_senha', // substitua pela sua senha do PostgreSQL
  port: 5432, // porta padrão do PostgreSQL
});

// Teste de conexão com o banco de dados
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão bem-sucedida com o banco de dados PostgreSQL');
  }
});

// Rotas
app.get('/', (req, res) => {
  res.send('API está funcionando');
});

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
