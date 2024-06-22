const express = require('express');
const router = express.Router();
const zod = require("zod");
const bodyParser = require("body-parser");
const {connectToDb,getDB} = require("./mongoc")
const jwt  = require("jsonwebtoken");
const {jwtSecret} = require("../secret");

router.use(bodyParser.json());

let db;
connectToDb((err)=>{
    if(!err){
      db = getDB();
    }
  })

const bodySchema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6),
  });

router.post('/login',async(req,res)=>{

    const result = await db.collection("useraccount").findOne(req.body);

    if(!result){
      res.status(400).json({error:"Invalid credentials"});
      res.end();
      return;
    }
    const token = jwt.sign({key:result._id},jwtSecret);

    res.status(200).json({token}); 
    res.end();
  })

  router.post('/register',async(req,res)=>{

    const {success} = bodySchema.safeParse(req.body);
    if(!success){
      res.status(400).json({error:"Invalid data"});
      res.end();
      return;
    }

    let exist = await db.collection("useraccount").findOne({email : req.body.email})

    if(exist){
      res.status(400).json({error:"Email already exists"});
      res.end();
      return;
    }

    let created = await db.collection("useraccount").insertOne(req.body);

    if(!created){
      res.status(500).json({error:"Internal server error"});
      res.end();
      return;
    }
    const token = jwt.sign({key:created.insertedId},jwtSecret);

    res.status(200).json({token});

    res.end();
  })

module.exports = router;