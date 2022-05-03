const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

// Serve React
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Catch all other requests
app.get('*', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, '../client/build', 'index.html')
  );
});

// Listen
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
