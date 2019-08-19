const mongoose = require('mongoose');

const StarterDeckSchema = mongoose.Schema(
  {
    id: {
      type: 'Number',
    },
    name: {
      type: 'String',
    },
    date_creation: {
      type: 'Date',
    },
    date_update: {
      type: 'Date',
    },
    description_md: {
      type: 'String',
    },
    user_id: {
      type: 'Number',
    },
    investigator_code: {
      type: 'String',
    },
    investigator_name: {
      type: 'String',
    },
    slots: {
      type: 'Mixed'
    },
    ignoreDeckLimitSlots: {
      type: 'Mixed',
    },
    version: {
      type: 'String',
    },
    xp: {
      type: 'Mixed',
    },
    xp_adjustment: {
      type: 'Mixed',
    },
    exile_string: {
      type: 'Mixed',
    },
    taboo_id: {
      type: 'Mixed',
    },
    tags: {
      type: 'String',
    },
    previous_deck: {
      type: 'Mixed',
    },
    next_deck: {
      type: 'Mixed',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Starter-Deck', StarterDeckSchema);
