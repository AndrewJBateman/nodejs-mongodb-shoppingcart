const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db; //_ indicates it is only used internally, in this file

//mongodb+srv://user1:@cluster0-kaj5u.azure.mongodb.net/admin
const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://username:password@cluster0-kaj5u.azure.mongodb.net/shop?retryWrites=true', { useNewUrlParser: true }
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);	
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
