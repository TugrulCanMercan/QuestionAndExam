import Questions from "../Helper/Router"
import questionController from "../Controller/QuestionsController";
import questionRepository from "../Infrastructures/Repositories/QuestionRepository";
import {QuestionModel} from "../Infrastructures/Mongo-Model/questionModel";

const questionRepo = new questionRepository(QuestionModel)

Questions.get("/getQuestions/Category/:name/QuestionId/:id", (req, res) => {
    const params = req.params

    res.send(`gelen soru id : ${params.id} gelen kategory ${params.name} `)
})

Questions.post('/addQuestions', async (req, res) => {
    const questionControllers = new questionController(questionRepo)
    questionControllers.createQuestions(req)
    res.send("bak")

})


export default Questions