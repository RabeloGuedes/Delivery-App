require('dotenv/config');

const port = process.env.PORT || 3001;
const app = require('./app');

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Erro no servidor' });
}); 

app.listen(port);
console.log(`Api rodando na porta ${port}`);
