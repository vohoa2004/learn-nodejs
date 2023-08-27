require('dotenv').config(); // to use dotenv

const express = require('express');
const app = express(); // app express
const port = process.env.PORT || 8888; //declare port
const hostname = process.env.HOST_NAME;


//config
const configViewEngine = require('./config/viewEngine')
configViewEngine(app);

//router
const webRoutes = require('./routes/web');
app.use('/', webRoutes);
//can specify the path by the first parameter, EX:
app.use('/test', webRoutes);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})