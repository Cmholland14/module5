const express = require("express");
const router = express.Router();

router.get("/add", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(`add → ${num1} + ${num2} = ${result}`);
  res.status(200);
  res.json({ result: sum });
});

router.get("/subtract", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 - number2;
  console.log(`subtract → ${num1} - ${num2} = ${result}`);
  res.status(200);
  res.json({ result: sum });
});

router.get("/multiply", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 * number2;
  console.log(`multiply → ${num1} * ${num2} = ${result}`);
  res.status(200);
  res.json({ result: sum });
});

router.get("/divide", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 / number2;
  console.log(`divide → ${num1} / ${num2} = ${result}`);
  res.status(200);
  res.json({ result: sum });
});

module.exports = router;
