const {Router} = require('express')
const router = Router()
const authController = require('../controllers/authController')

router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router