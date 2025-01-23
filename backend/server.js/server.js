const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Use CORS to allow front-end communication
app.use(cors());
app.use(express.json());

// Basic route to test server
app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
