const express = require('express');
const router = express.Router();
const schema = require("../graphql/schema/schema")
const {graphql} =  require('graphql')
// import schema, { graphql } from "./schema";

const mongoose = require("mongoose");
const { toJSON } = require('../graphql/types/farmacoType');

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster1.wby8c.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose
.connect(uri, options)

/* GET home page. */
router.get('/', function(req, res, next) {
  let query = `{ queryAllFarmacos { common_name } }`;
  graphql(schema, query)
  .then(function (data) {
    //  res.json(data.data["queryAllFarmacos"] );
      res.render('farmacos', {farmacos: data.data["queryAllFarmacos"], title: 'Farmacos' })
  })
})

module.exports = router;
