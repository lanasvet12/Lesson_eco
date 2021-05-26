const Quiz = require('../../models/Quiz')

class quizController{
    async createQuiz(req,res){
        try{
            const quiz = new Quiz({
                quiz_title: req.body.quiz_title,
                color: req.body.color,
                img: req.body.img,
                questions: []
            })
            await quiz.save()
            return res.status(200).json(quiz)
        }
        catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async getQuizzes(req,res){
        try{
            const quizzes = await Quiz.find({}, {quiz_title: 1, color: 1, img: 1})

            return res.status(200).json(quizzes)

        }
        catch (e) {
            return res.status(400).json({message: e.message})
        }
    }
    async getQuizById(req,res){
        try{
            const quiz = await Quiz.findById(req.params.id)


            return res.status(200).json(quiz)
        }
        catch (e) {
            return res.status(400).json({message: e.message})
        }
    }
}

module.exports = new quizController()
