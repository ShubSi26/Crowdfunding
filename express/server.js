const path = require('path');
const express = require('express')
const {ObjectId} = require('mongodb')
const cors = require('cors');
const bodyParser = require('body-parser');
const {connectToDb,getDB} = require("./mongoc")

const app = express()
const port = 3000
app.use(cors());
app.use(bodyParser.json());
let db;


// app.get('/projectlist', (req, res) => {
//   ar=[];
//   db.collection("useraccount")
//     .find({})
//     .toArray()
//     .then(result => {
//       result.forEach(element => {
//         i=0;
//         element.projects.forEach(p=>{
//           p.id = element._id;
//           p.index = i;
//           p.username = element.name;
//           ar.push(p);
//           i++;
//         });
//       });
//       res.status(200).json(ar);
//       res.end();
//     })
//     .catch(error => {
//       console.error("Error occurred:", error);
//       res.status(500).json({ error: "Internal server error" }); // Send an error response
//     });
// });



// app.post('/profiledetails',(req,res)=>{
//   let dtl = [];
//   console.log(req.body);
//   db.collection("useraccount")
//   .findOne({_id: new ObjectId(req.body.id)})
//   .then((resp)=>{
//     //console.log(resp);
//     res.json(resp);
//     res.end();
//   })
//   .catch(err=>{
//     res.status(500).json(err);
//     res.end();
//   })
// })


// app.post('/payment',(req,res)=>{
//   console.log(req.body);
//   const {id,index,amount} = req.body;
//   db.collection('useraccount')
//   .updateOne({_id: new ObjectId(id)},{$inc:{ ['projects.' + index + '.fundcollected']: amount }})
//   .then(result=>{
//     console.log(result);
//     res.status(200).json(result);
//   })
//   .catch(err=>{
//     res.status(500).json(err);
//     res.end();
//   })
// })

// app.delete('/deleteproject',(req,res)=>{
//   console.log(req.body);
//   const {id,index} = req.body;
//   db.collection('useraccount')
//   .updateOne({_id: new ObjectId(id)},{$unset: { ["projects." + index]: 1 }})
//   .then(result=>{
//     db.collection('useraccount')
//     .updateOne({_id: new ObjectId(id)},{$pull: {projects: null}})
//     .then(result=>{
//       res.status(200).json(result);
//     })
//   })
// });

// app.post('/',(req,res)=>{
//   console.log(req.body);
//   console.log("req.bofgndy");
//   res.end();
// })

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });