const express = require('express');
const router = express.Router();
const schema = require("../graphql/schema/schema")
const {graphql} =  require('graphql')


/* GET home page. */
router.get('/', function(req, res, next) {
  const { page = 1, limit = 10 } = req.query;
  let first = (page-1)* limit
  let count = 0
  // get total documents in the Posts collection 
  let getcount= () => graphql(schema, `{queryCountFarmacos}`)
    .then(function (data) {
      count= data.data["queryCountFarmacos"]
      console.log(count)
    });

  count = getcount()
  console.log(count)

  let totalPages = Math.ceil(count / limit)

  let query = `{ queryAllFarmacos(first:${first}, limit: ${limit}) { id, name, type, drugbank_id, atc_code }}`;
  graphql(schema, query)
  .then(function (data) {
 //   res.json(data.data["queryAllFarmacos"] );
    res.render('farmacos/index', {farmacos: data.data["queryAllFarmacos"], title: 'Farmacos', totalPages: totalPages , currentPage: page })
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


