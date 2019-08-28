const mongoose = require('mongoose');

const StatSchema = new mongoose.Schema(
  {
    campaignid: {
      type: 'Number',
      required: true,
    },
    scenarioid: {
      type: 'Number',
      required: true,
    },
    campaignname: {
      type: 'String',
      required: true,
      minlength: 4,
    },
    scenarioname: {
      type: 'String',
      required: true,
      minlength: 4,
    },
    difficulty: {
      type: 'Number',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Stat', StatSchema);
