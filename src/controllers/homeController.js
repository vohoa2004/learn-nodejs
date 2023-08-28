
const getHomePage = (req, res) => {
    // process data
    // call model
    res.send('Hello World vs Mai Hoa and Nodemon')
}

const getABC = (req, res) => {
    res.send('check ABC')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

// luôn nhớ muốn reuse function thì phải export
module.exports = { // export ra nhieu bien -> export dang object
    getHomePage,
    getABC,
    getHoiDanIT
}