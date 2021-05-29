let { books } = require('../database/data')

const getAllBooks = (req, res) => {
    res.status(200).json({success: true, data: books})
}


module.exports = {
    getAllBooks
}