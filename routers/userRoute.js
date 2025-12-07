const express = require('express')
const userControl = require('../controllers/userController')

const router = express.Router()

router.get('/', userControl.getAllBooks)
router.get('/:code', userControl.getBookByCode)
router.post('/', userControl.addBook)
router.put('/:code', userControl.PutBook)
router.delete('/:code', userControl.delBook)
module.exports = router