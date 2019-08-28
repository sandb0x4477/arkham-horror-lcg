module.exports = (app) => {
  const stats = require('../controllers/stat.controller');

  app.get('/api/stats', stats.findAll);
  app.post('/api/stats', stats.create);
}
