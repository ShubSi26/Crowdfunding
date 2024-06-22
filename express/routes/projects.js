const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const {ObjectId} = require('mongodb')
const {connectToDb,getDB} = require("./mongoc")
const {JWTMiddleware} = require("./../middlewares/jwt");

router.use(bodyParser.json());

let db;
connectToDb((err)=>{
    if(!err){
      db = getDB();
    }
  })


router.post('/addproject',JWTMiddleware,async(req,res)=>{
    delete req.body.id;
    req.body.userid = req.id;

    const result = await db.collection("projects").insertOne(req.body);

    if(!result){
      res.status(400).json({error:"Invalid credentials"});
      res.end();
      return;
    }
    res.status(200).json(result);
    res.end();
  })


  router.post('/delete',JWTMiddleware,(req,res)=>{
    const {id} = req.body;

    const result = db.collection("projects").deleteOne({_id: new ObjectId(id)});

    if(!result){
      res.status(400).json({error:"Invalid credentials"});
      res.end();
      return;
    }
    res.status(200).json(result);
    res.end();
  });

  router.post('/update',async(req,res)=>{
    const id = req.body.id;
    delete req.body.id;
    const result = await db.collection("projects").updateOne({_id: new ObjectId(id)},{$set:req.body});

    if(!result){
      res.status(400).json({error:"Invalid credentials"});
      res.end();
      return;
    }
    res.status(200).json(result);
    res.end();

  });

  router.get('/userprojects',JWTMiddleware, async(req, res) => {

    const result = await db.collection("projects").find({userid: req.id}).toArray();

    if(!result){
      res.status(400).json({error:"Invalid credentials"});
      res.end();
      return;
    }
    res.status(200).json(result);
    res.end();
  });

  router.get('/',async(req,res)=>{
    let result = await db.collection("projects").find({}).toArray();
   
    if(!result){
      res.status(400).json({error:"Invalid credentials"});
      res.end();
      return;
    }
    const map = new Map();
    for (const element of result) {
      if (map.has(element.userid)) {
        element.name = map.get(element.userid);
      } else {
        const user = await db.collection("useraccount").findOne({_id: new ObjectId(element.userid)});
        map.set(element.userid, user.name);
        element.name = user.name;
      }
    }
    res.status(200).json(result);
    res.end();
  });


module.exports = router;