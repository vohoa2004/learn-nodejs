const express = require('express');

const router = express.Router();

//khai bao route va chi dinh hanh dong cho route
router.get('/', (req, res) => {
    res.send('Hello World vs Mai Hoa and Nodemon')
})

//khai bao route
router.get('/abc', (req, res) => {
    res.send('Check ABC!')
})

router.get('/hoidanit', (req, res) => {
    // res.send('<h1>Hoi dan IT</h1>')
    res.render('sample.ejs')
})

module.exports = router; // export default