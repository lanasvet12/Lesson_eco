const {Schema, model} = require('mongoose')

const schema = new Schema({
    question_title: {
        type: String,
        required: true
    },
    answers: {
        type: Array,
        required: true
    }
})

module.exports = model('Question', schema)