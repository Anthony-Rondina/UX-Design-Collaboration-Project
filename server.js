const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors')
const app = express();
const userController = require("./routes/api/users")
const artController = require("./routes/api/art")
require('dotenv').config();
require('./config/db');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'));
app.use("/api/users", userController)
app.use("/api/art", artController)

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


/* Configure to use port 3001 instead of 3000 during
 development to avoid collision with React's dev server  */
const port = process.env.PORT || 5081;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});