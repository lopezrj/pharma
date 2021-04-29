const mongoose = require('mongoose');
const dotenv = require('dotenv')

results = dotenv.config().parsed

const user = results.PH_USER
const pwd = results.PH_PWD
const cluster = results.PH_CLUSTER
const database = results.PH_DATABASE

const connectionstring = `mongodb+srv://${user}:${pwd}@${cluster}/${database}?retryWrites=true&w=majority`

const initDB = () => {

  mongoose.connect(
    connectionstring,
    { useNewUrlParser: true ,
      useUnifiedTopology: true 
    }
  );

  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });

}

module.exports = initDB;