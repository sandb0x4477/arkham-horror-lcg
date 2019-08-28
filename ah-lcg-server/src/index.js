const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const router = express.Router();

// create express app
const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// .env config
require("dotenv").config();

// Connecting to the database
mongoose.connect(process.env.DB_CONN, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

// Static files
// app.use(express.static(path.join(__dirname, "public")));

// router.use(checkJwt({
//     secret: process.env.JWT_SECRET
//   })
//   .unless({
//     path: '/api/autenticate'
//   }));

// router.use((err, req, res, next) => {
//   if (err.name === 'UnauthorizedError') {
//     res.status(401).send({
//       error: err.message
//     });
//   }
// })

require('./routes/card.routes.js')(app);
require('./routes/stat.routes.js')(app);

// SPA
// app.use("*", (req, res) => {
//   return res.sendFile(path.join(__dirname, "public/index.html"));
// });
const PORT = process.env.PORT || 3033;
// listen for requests
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is listening on port ${PORT}`);
});
