const express = require("express");
const calculatorRouter= require("./routes/calculatorRoutes.js")
const app = express();

app.use("/calculator", calculatorRouter);

const port=3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const calculatorRoutes = require("./routes/calculatorRoutes");

app.use("/calculator", calculatorRoutes);
