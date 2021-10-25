module.exports = (req, res) => {
  const { feed = 'all' } = req.query;
  res.send(`Hello ${feed}!`);
};
