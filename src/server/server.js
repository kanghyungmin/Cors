const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  // res.header("Access-Control-Allow-Origin", "http://localhost:5502")
  res.send({status : 'ok'})
});

app.use('/', router);
app.listen(process.env.port || 3000);
