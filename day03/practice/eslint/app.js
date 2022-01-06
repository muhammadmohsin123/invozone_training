const express = require('express');

const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('Muhammad Mohsin');
});

app.listen(3000, () => {
  console.log('server is running on 3000...');
});
