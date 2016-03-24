var fs  = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

var mysql = require('mysql');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded());//for content endcoding


var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: process.env.MY_PASS,
    database:'mysite'
});

connection.connect(function (err) {
    if (err) {
        console.warn('Error connectiom to Db', err);
        return;
    }
    console.log('Connetion established');
});

app.get('/', function (req, res) {
    fs.readFile('publuc/index.html', function (err, data) {
        res.send(data.toString('utf8'));
    });
});

app.get('/users', function (req, res) {
    connection.query('SELECT * FROM users', function(err, rows, fields){
        connection.end();
        if (!err) {
            console.log('The solution is: ', rows);
            res.send(rows)
        }else{console.log('Error while performing  Query');}
    });

})

app.listen(8080);
console.log('Server is listening on 8080 port');
