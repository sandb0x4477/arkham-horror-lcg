module.exports = (app) => {
  const cards = require('../controllers/card.controller');

  app.get('/api/cards', cards.findAll);
  app.get('/api/cards/search', cards.search);

  // app.get('/api/cards/codes', cards.findByCodes);

  // app.get('/api/cards/:codeId', cards.findByCode);

  // app.post('/api/cards', cards.create);

  // app.put('/api/cards/:cardId', cards.update);

  // app.delete('/api/cards/:cardId', cards.delete);
}
