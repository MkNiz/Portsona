require('dotenv').config()
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const api = require('./server/routes/api');

const app = express();

const Model = require('./server/models/model_manifest')(mongoose);

//Connect to Mongo using mongoose
mongoose.connect(process.env.MONGODB_URI, function(err){
  if(err){
    console.log(`
Error connecting to database.
    Make sure the MONGODB_URI environmental variable is set and accurate,
    and also that the database exists and is running.
    `);
    process.exit(1);
  }else{
    console.log(`
*------------------------------------------*
| Successfully connected to MongoDB! Nice. |
*------------------------------------------*
    `);
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '6969';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`
=-> App running on port ${port}`));
