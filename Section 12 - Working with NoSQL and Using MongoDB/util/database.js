const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://david:david150888@cluster0.c4d9j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(client => {
    console.log('Connected');
    //*Storing the connection to the database
    _db = client.db();
    callback();
  })
  .catch(err => {
    console.log(err);
    throw err;
  })
}

const getDb = () => {
  if(_db) {
    return _db;
  }
  throw 'No database found!';
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;