const express = require('express');
const mongoose = require('mongoose');
const URI = require('./config/keys').MongoURI
const PORT = process.env.PORT || 80;


const app = express();

mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology: true})
  .then(() =>
    console.log("mongo connected")
  )
  .catch(err => console.log(err));

app.use(express.static(__dirname +'/public'));

app.use('/',require('./routes/about.js'));
app.use('/',require('./routes/algo.js'));
app.use('/',require('./routes/robot.js'));
app.use('/',require('./routes/scode.js'));
app.use('/',require('./routes/team.js'));

app.listen(PORT, console.log(PORT));
