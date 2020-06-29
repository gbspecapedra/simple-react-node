const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/time", (req, res, next) => {
  let systemDate = new Date(Date.now()).toLocaleString();
  res.json(systemDate)
})

app.listen(3333, () => {
  console.log('server started');
})
