const express = require("express");
const router = express.Router();
const app1 = express();
const app2 = express();

startwebserver(app1,3000);
startwebserver(app2, 3001);
function startwebserver(app, port) {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

const calculatorRoutes =
require('./routes/calculatorRoutes');


app.use('/calculator', calculatorRoutes);
