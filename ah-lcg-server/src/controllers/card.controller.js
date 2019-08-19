const Card = require('../models/card.model');

// Retrieve and return all contacts from the database.
exports.findAll = (req, res) => {
  if (req.query.id) {
    console.log('findAll req.query.id => ', req.query.id);
    Card.find({ code: { $in: req.query.id } })
      .then(cards => {
        res.send(cards);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving cards.',
        });
      });
  } else {
    console.log('Executing Find All');

    Card.find()
      .then(cards => {
        res.send(cards);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving cards.',
        });
      });
  }
};

// ! Search
exports.search = (req, res) => {
  console.log('req.query => ', req.query.search);

  if (req.query.search && req.query.search.length > 2) {
    const regex = new RegExp(escapeRegex(req.query.search), 'gi');

    Card.find({ $or: [{name: regex}, {type_code: regex}, {faction_code: regex}, {subtype_name: regex}] })
      .sort('code')
      .then(cards => {
        res.send(cards);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving cards.',
        });
      });
  } else {
    res.status(500).send({
      message: 'No query string provided or query too short...',
    });
  }

  // Card.find({code: {$in: req.query.id}})
  // .then(cards => {
  //   res.send(cards);
  // }).catch(err => {
  //   res.status(500).send({
  //     message: err.message || "Some error occurred while retrieving notes."
  //   });
  // });
};

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
