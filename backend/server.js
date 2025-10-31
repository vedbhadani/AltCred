const express = require('express');
const dotenv = require('dotenv');
const routes = require('./src/routes');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send(' API is running...');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
