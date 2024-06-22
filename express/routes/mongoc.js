const {MongoClient} = require("mongodb");
const {mongourl} = require("../secret");
let dbc;
module.exports = {
    connectToDb: (cb)=>{
        MongoClient.connect(mongourl)
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