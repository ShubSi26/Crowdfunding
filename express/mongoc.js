const {MongoClient} = require("mongodb");
let dbc;
module.exports = {
    connectToDb: (cb)=>{
        MongoClient.connect("mongodb+srv://uurde:Banpe96gc5TttNGy@cluster0.l67no9m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
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