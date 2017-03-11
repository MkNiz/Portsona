const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Model = require('../models/model_manifest')(mongoose);

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

// -- Middleware --

// Create or grab config file.
const getConfig = (req, res, next) => {
  Model.Config.findOne((err, cfg) =>{
    if(err) {
      throw err;
    } else if(!cfg){
      cfg = new Model.Config({
        name: "Default McDefaultson",
        headline: "I Love Being the Default"
      });
      cfg.save((err) => {
        if(err) { throw err; } else {
          console.log("\nCreated the default configuration.\n");
          req.config = cfg;
          req.stcode = 201;
          next();
        }
      });
    } else {
      req.config = cfg;
      next();
    }
  });
};

// -- Routes --
router.get('/', (req, res) => {
  res.write(`API Commands:

  * GET /config: Responds with all configuration settings
  `);
  res.end();
});

router.get('/config', getConfig, (req, res) => {
  res.status(req.stcode || 200).send({
    name: req.config.name,
    headline: req.config.headline
  });
});

router.get('/pages', (req, res) => {
  Model.Page.find((err, pages) => {
    if(err) { throw err; } else {
      res.send({ pages: pages });
    }
  });
});

router.get('/page/:page_url', (req, res) => {
  Model.Page.findOne({url: req.params.page_url}, (err, page) => {
    if(err) { throw err; } else {
      res.send({ page: page });
    }
  });
});

router.get('/homepage', (req, res) => {
  Model.Page.findOne({homepage: true}, (err, page) => {
    if(err) { throw err; } else {
      res.send({ page: page });
    }
  });
});

module.exports = router;
