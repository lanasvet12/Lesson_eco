const {Router} = require('express')
const router = Router()
const quizController = require('../controllers/quizController')
const auth = require('../../middleware/auth.middleware')

router.post('/create-quiz', auth, quizController.createQuiz)
router.get('/get-quizzes', auth, quizController.getQuizzes)
router.get('/:id', auth, quizController.getQuizById)


module.exports = router