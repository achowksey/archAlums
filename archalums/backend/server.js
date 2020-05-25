const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'alumsTest'
});

db.connect();

app.get('/data', function(req,res){
let sql = 'SELECT * FROM alumlist';
db.query(sql, (err, result)=>{
    if(err) throw err;
    res.send(result);
});
});


app.listen(3210, ()=>{
    console.log('Server listening on 3210')
});