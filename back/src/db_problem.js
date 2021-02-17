const mongo = require('mongodb').MongoClient;
const CONN_ADDR = "mongodb://39.103.130.47:5984";

const DB_NAME = 'cpm_problems';

var query_for_all = function(db , print){
    var collection = db.collection('problem');
    collection.find({}).toArray(function(err , doc) {
        if(err)
        {
            console.log(err);
            return;
        }
        print(doc);
    });
};

mongo.connect(CONN_ADDR , function(err , client) {
    if(err)
    {
        console.log(err);
        return;
    }
    const db = client.db(DB_NAME);
    query_for_all(db , function(doc) {
        console.log(doc);
        client.close();
    });
});