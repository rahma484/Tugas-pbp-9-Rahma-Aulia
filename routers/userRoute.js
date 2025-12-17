const express = require('express')
const userControl = require('../controllers/userController')
const router = express.Router()

router.get('/',userControl.getAllUsers)
router.get('/:id',userControl.getUserById)

module.exports = router