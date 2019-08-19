const StarterDeck = require('../models/starter-deck.model');

exports.findAll = (req, res) => {
  StarterDeck.find()
    .then(decks => {
      res.send(decks);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Starter Decks.',
      });
    });
};

exports.findOne = (req, res) => {
  console.log('req => ', req.params.invId);
  StarterDeck.findOne({investigator_code: req.params.invId})
    .then(deck => {
      console.log('deck => ', deck);
      if (!deck) {
        return res.status(404).send({
          message: 'deck not found with id ' + req.params.invId,
        });
      }
      res.send(deck);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Deck not found with id ' + req.params.invId,
        });
      }
      return res.status(500).send({
        message: 'Error retrieving Deck with id ' + req.params.invId,
      });
    });
};
