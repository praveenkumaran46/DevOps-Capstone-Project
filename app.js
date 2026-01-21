const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 DevOps Pipeline Working!');
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(80, () => {
  console.log('Server running on port 3000');
});

