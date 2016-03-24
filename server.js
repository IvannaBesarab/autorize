var express = require('express');
var mysql = require('mysql');
var app = express();
// var oauth2lib = require('oauth20-provider');
// var oauth2 = new oauth2lib({log: {level: 2}});
// app.use(oauth2.inject());

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
