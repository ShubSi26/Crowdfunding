const {MongoClient} = require("mongodb");
let dbc;
module.exports = {
    connectToDb: (cb)=>{
        MongoClient.connect("mongodb://localhost:27017/croudfunding")
        .then((client)=>{
            dbc = client.db();
            return cb();
        })
        .catch(err=>{
            console.log(err)
            return cb(err)
        })
    },
    getDB : ()=>dbc
}