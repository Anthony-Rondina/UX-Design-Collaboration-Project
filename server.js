const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors')
const fileUpload = require('express-fileupload')
const app = express();
const userController = require("./routes/api/users")
const artController = require("./routes/api/art")
const commentController = require("./routes/api/comment")


require('dotenv').config();
require('./config/db');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//Cloudinary Upload Picture
app.use(fileUpload({
  useTempFiles: true
}))

app.use(require('./config/checkToken'));
app.use("/api/users", userController)
app.use("/api/art", artController)
app.use("/api/comments", commentController)
app.use('/api', require('./routes/api/upload'))



app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


/* Configure to use port 3001 instead of 3000 during
 development to avoid collision with React's dev server  */
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});