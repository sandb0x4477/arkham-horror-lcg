module.exports = (app) => {
  const decks = require('../controllers/starter-deck.controller');

  app.get('/api/starter-decks', decks.findAll);
  app.get('/api/starter-decks/:invId', decks.findOne);
}
