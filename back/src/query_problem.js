const mongo = require('mongodb').MongoClient;
const CONN_ADDR = "mongodb://39.103.130.47:5984";

const DB_NAME = 'cpm_problems';
const PROB = 'problem';

var c_query = function(db, callback, condition, coll) {
    var collection = db.collection(coll);
    collection.find(condition).toArray(function(err, doc){
        if(err)
        {
            console.log(err);
            return;
        }
        callback(doc);
    });
}

var c_insert = function(db, callback, datas, coll) {
    var collection = db.collection(coll);
    collection.insertMany(datas, function(err, result){
        if(err)
        {
            console.log(err);
            return;
        }
        callback(result);
    })
}

var c_update = function(db, callback, datas, coll)

var c_problem_insert = function(db, callback, datas) {
    c_insert(db, callback, datas, PROB);
}

var c_problem_query = function(db, callback, condition) {
    c_query(db, callback, condition, PROB);
}

var problem_query = function(condition , callback) {
    mongo.connect(CONN_ADDR, function(err , client){
        if(err)
        {
            console.log(err);
            return;
        }
        const db = client.db(DB_NAME);
        c_problem_query(db, function(doc){
            callback(doc);
            client.close();
       } , condition);
    })
}

var problem_insert = function(datas , callback) {
    mongo.connect(CONN_ADDR, function(err , client) {
        if(err)
        {
            console.log(err)
            return;
        }
        const db = client.db(DB_NAME);
        c_problem_insert(db, function(result) {
            callback(result);
            client.close();
        }, datas);
    })
}

module.exports = {
    problem_query,
    problem_insert
}