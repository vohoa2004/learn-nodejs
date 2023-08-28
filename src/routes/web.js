//Router chỉ có tác dụng định tuyến, còn xử lý là ở chỗ khác, controllers
const express = require('express');
const router = express.Router();

// import handlers from controllers
// import dạng object do ben kia export getHomePage dang object
const { getHomePage, getABC, getHoiDanIT } = require('../controllers/homeController');

//khai bao route va chi dinh hanh dong cho route
// Cau truc router: router.Method(path, handler - các hàm xử lý data khi người dùng vào cái path kia)
// Chỉ gọi tên getHomapage để tham chiếu tới function geTHomePage từ controller, nếu để ngoặc là sai vì để ngoặc nghĩa là gọi hàm thực thi ngay tại đây
router.get('/', getHomePage);

router.get('/abc', getABC);

router.get('/hoidanit', getHoiDanIT)

module.exports = router; // export default