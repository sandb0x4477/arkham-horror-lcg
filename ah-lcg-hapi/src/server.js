'use strict';

const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
require('dotenv').config();

const server = Hapi.server({
  port: process.env.PORT || 3033,
  host: 'localhost',
});

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(process.env.DB_CONN, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });

const Card = require('./models/card.model');

server.route({
  method: 'GET',
  path: '/api/cards',
  handler: async (request, h) => {
    console.log('request => ', request.query);
    try {
      if (request.query) {
        var cards = await Card.find({ code: { $in: request.query.id } }).exec();
      } else {
        var cards = await Card.find().exec();
      }
      return h.response(cards);
    } catch (error) {
      return h.response(error).code(500);
    }
  },
});

server.route({
  method: 'GET',
  path: '/api/cards/{id}',
  handler: async (request, h) => {
    console.log('request => ', request.params.id);
    try {
      var card = await Card.findOne({code: request.params.id});

      return h.response(card);
    } catch (error) {
      return h.response(error).code(500);
    }
  },
});

server.start();
console.log('Server running on %s', server.info.uri);

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

// init();
