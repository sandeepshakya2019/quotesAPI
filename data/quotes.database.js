const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

let database;

async function connect() {
  try {
    const client = await mongoClient.connect("mongodb://127.0.0.1:27017/");
    console.log("MongoClient establish the connction");
    database = client.db("quotesAPI");
  } catch (err) {
    throw { Message: "Mongo Service is Not working" };
    return err;
  }
}
function getDb() {
  if (!database) {
    throw { message: "Database Connection is not established yet" };
  }
  console.log("Database Connected");
  return database;
}

module.exports = {
  connectToDatabase: connect,
  getDb: getDb,
};
