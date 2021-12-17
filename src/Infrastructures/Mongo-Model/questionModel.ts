import mongoDb, {Schema} from "mongoose";
import {QuestionI, QuestionModelI, QuestionOptionsI} from "../../Core/Model/RequestModel/QuestionModel";



const QuestionModel = new Schema<QuestionModelI>({
    questionsCategory: String,
    questionsDifficultyRate: String,
    questionLikeRate: String,
    question: new Schema<QuestionI>({
        questionsAnswer: String,
        questionOptions: new Schema<QuestionOptionsI>({
            A: String,
            B: String,
            C: String,
            D: String,
            E: String
        })
    })
})

export default QuestionModel