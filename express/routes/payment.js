const express = require('express');
const router = express.Router();
const {ObjectId} = require('mongodb')
const bodyParser = require("body-parser");
const {connectToDb,getDB} = require("./mongoc")
const {JWTMiddleware} = require("./../middlewares/jwt");

router.use(bodyParser.json());

let db;
connectToDb((err)=>{
    if(!err){
      db = getDB();
    }
  })


  router.post('/',JWTMiddleware, async(req,res)=>{

    const {id,amount} = req.body;

    const result = await db.collection("projects").updateOne({_id: new ObjectId(id)},{$inc:{ 'fundcollected': amount }});

    if(!result){
      res.status(400).json({error:"Invalid credentials"});
      res.end();
      return;
    }
    res.status(200).json(result);
    res.end();
  })
  

module.exports = router;