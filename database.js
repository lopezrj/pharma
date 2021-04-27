const mongoose = require('mongoose');

const initDB = () => {

  mongoose.connect(

    'mongodb+srv://farmauser:farmauser@cluster1.wby8c.mongodb.net/farmacos?retryWrites=true&w=majority',  
    { useNewUrlParser: true ,
      useUnifiedTopology: true 
    }
  );

  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });

}

module.exports = initDB;