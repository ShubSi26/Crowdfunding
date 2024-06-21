const express = require('express');
const bodyParser = require("body-parser");
const {ObjectId} = require('mongodb')
const {connectToDb,getDB} = require("./mongoc")
const {JWTMiddleware} = require("./../middlewares/jwt");

const router = express.Router();
router.use(bodyParser.json());

let db;
connectToDb((err)=>{
    if(!err){
      db = getDB();
    }
  })

  router.post('/',JWTMiddleware, async (req,res)=>{

    const result = await db.collection("useraccount").findOne({_id: new ObjectId(req.id)});

    if(!result){
      res.status(400).json({error:"Invalid credentials"});
      res.end();
      return;
    }
    res.status(200).json(result);
    res.end();
  })

module.exports = router;