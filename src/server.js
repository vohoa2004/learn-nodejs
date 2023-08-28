require('dotenv').config(); // to use dotenv

const express = require('express');
const app = express(); // app express
const port = process.env.PORT || 8888; //declare port
const hostname = process.env.HOST_NAME;
const mysql = require('mysql2');

//config
const configViewEngine = require('./config/viewEngine')
configViewEngine(app);

//router
const webRoutes = require('./routes/web');
app.use('/', webRoutes);
//can specify the path by the first parameter, EX:
app.use('/test', webRoutes);

// test connection to dtb
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, //default: 3306
    user: 'root',
    password: '12345', //default: empty
    database: 'hoidanit'
});

// simple query
connection.query(
    'SELECT * FROM Users',
    function (err, results, fields) {
        console.log(">>>results= ", results); // results contains rows returned by server
        console.log(">>> fields=", fields); // fields contains extra meta data about results, if available
    }
);

// with placeholder
connection.query(
    'SELECT * FROM `Users` WHERE `name` = "Hoa"',
    ['Page', 45],
    function (err, results) {
        console.log(results);
    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
