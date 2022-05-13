module.exports = validateSaleDate = (req, res, next) => {
  const { infos: { saleDate } } = req.body;
  const dateRegex = /(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

  const dateVerification = dateRegex.test(saleDate);

  if(!saleDate) {
    return res.status(400).json({message: 'O campo saleDate é obrigatório'});
  }

  if(!dateVerification) {
    return res.status(400).json({message: 'O campo saleDate não é uma data válida'});
  }

  next();

}