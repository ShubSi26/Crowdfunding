const path = require('path');
const express = require('express');

const route = require('./routes/routes');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use("/",route);

app.listen(3000,()=>{
    console.log("Server started at 3000");
})