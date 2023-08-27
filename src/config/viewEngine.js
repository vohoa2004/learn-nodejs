const path = require('path'); //take the path
const express = require('express');

const configViewEngine = (app) => {
    //config template engine
    // use path.join and __dirname để khỏi phải gõ ra toàn bộ path tuyệt đối

    // nhưng phải kiểm tra kỹ __dirname
    // __dirname sẽ dẫn ra path của thư mục chứa file code hiện tại

    //kiểm tra dirname
    //console.log("check __dirname", __dirname);

    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs')

    //config static files -> automaticlly deal with static file when call later
    // use path.join to get the exact path
    app.use(express.static(path.join('./src', 'public')));
}

//export module
module.exports = configViewEngine;

