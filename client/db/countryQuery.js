var MongoClient = require('mongodb').MongoClient;

var CountryQuery = function(){
  this.url = 'mongodb://localhost:27017/countries'
};

CountryQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var bucket = db.collection('bucketList');
        books.find().toArray(function(err, countriesDocs){
          onQueryFinished(countriesDosc)
        });
      }
    });
  }
}

module.exports = CountryQuery;