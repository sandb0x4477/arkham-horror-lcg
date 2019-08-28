const Stat = require('../models/stat.model');

exports.findAll = (req, res) => {
  Stat.find()
    .then(stats => {
      res.send(stats);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Stats.',
      });
    });
};

// Create and Save a new Contact
exports.create = (req, res) => {

  // Create a Note
  const stat = new Stat({
    campaignid: req.body.campaignid,
    scenarioid: req.body.scenarioid,
    campaignname: req.body.campaignname,
    scenarioname: req.body.scenarioname,
    difficulty: req.body.difficulty,
  });

  // Save Contact in the database
  stat.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Stat."
      });
    });
};

