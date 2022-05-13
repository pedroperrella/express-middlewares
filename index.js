const express = require('express');
const bodyParser = require('body-parser');
const validateProductName = require('./middlewares/validateProductName');
const validateInfos = require('./middlewares/validateInfos');
const validateSaleDate = require('./middlewares/validateSaleDate');
const validateWarrantyPeriod = require('./middlewares/validateWarrantyPeriod');

const app = express();
app.use(bodyParser.json());

app.listen(3001, () => {
  console.log('Ok!!');
})

app.post('/sales', validateProductName, validateInfos, validateSaleDate, validateWarrantyPeriod, (req, res) => {
  res.status(201).json({message: 'Venda cadastrada com sucesso'})
});