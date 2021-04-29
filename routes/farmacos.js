const express = require('express');
const router = express.Router();
const schema = require("../graphql/schema/schema")
const {graphql} =  require('graphql')

// import schema, { graphql } from "./schema";

// const mongoose = require("mongoose");
const { toJSON } = require('../graphql/types/farmacoType');



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


