const express = require("express");
const calculatorRouter = express.Router();
const app = express();

app.use('/calculator',calculatorRouter)
startwebserver(app,3000)

function startwebserver(app, port) {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

const calculatorRoutes = require('./routes/calculatorRoutes');


app.use('/calculator', calculatorRoutes);