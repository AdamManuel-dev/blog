module.exports = (req, res) => {
  const { name = 'World' } = req.query;
  console.log('test');
  res.send(`Hello ${name}!`);
};
