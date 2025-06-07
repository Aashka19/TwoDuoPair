const express = require('express');
const app = express();
const port = process.env.PORT || 5001; // Change 5000 to 5001
const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
