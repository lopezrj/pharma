const express = require('express');
const router = express.Router();

import schema, { graphql } from "./schema";

const mongoose = require("mongoose")

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster1.wby8c.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
const farmacosService = require('../graphql/resolvers')

mongoose
.connect(uri, options)

/* GET home page. */
router.get('/', function(req, res, next) {
  let query = `{ hello, person { name }, people { name, description } }`;
  graphql(schema, query).then(result => {
    res.json(result);
  });
//  .then(function (data) {
//      res.render('farmacos', {farmacos: data, title: 'Express' })
//  })
})

module.exports = router;
