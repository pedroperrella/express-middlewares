module.exports = validateWarrantyPeriod = (req, res, next) => {
  const { infos: { warrantyPeriod } } = req.body;

  const isInteger = Number.isInteger(warrantyPeriod);

  if(!warrantyPeriod) {
    return res.status(400).json({message: 'O campo warrantyPeriod é obrigatório'})
  }

  if(!isInteger && warrantyPeriod < 1 && warrantyPeriod > 3) {
    return res.status(400).json({message: 'O campo warrantyPeriod precisa estar entre 1 e 3'})
  }

  next();

}