const express = require('express');
const router = express.Router();
const schema = require("../graphql/schema/schema")
const {graphql} =  require('graphql')

/* GET home page. */
router.get('/', function(req, res, next) {
  let page = req.query.page || 1
  const { limit = 20 } = req.query;
  let first = (page-1)* limit
  
  // get total documents in the Posts collection 

  let query = `{ queryCountFarmacos, queryPageFarmacos(first:${first}, limit: ${limit}) { id, name, type, drugbank_id, atc_code }}`;
  graphql(schema, query)
  .then(function (data) {
    let countDocuments = data.data["queryCountFarmacos"]
    let totalPages = Math.ceil(countDocuments / limit)
//    res.json(data.data );
    res.render('farmacos/index', {farmacos: data.data["queryPageFarmacos"], title: 'Farmacos', totalPages: totalPages , currentPage: page })
  })
})


router.get('/:id', function(req, res, next) {
  let id = req.params.id
  console.log(id)
  let query = `{ queryFarmacoById (id: "${id}")
     {id, name, type, description, indication} }`;
  graphql(schema, query)
  .then(function (data) {
//     res.json(data );
    res.render('farmacos/view', {f: data.data["queryFarmacoById"], title: 'Farmacos' })
  })
})


module.exports = router;


