var express = require('express');
var router = express.Router();
const mongoose = require("mongoose")

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster1.wby8c.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }


mongoose
.connect(uri, options)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
