import mongoDb, {Schema} from "mongoose";
import {QuestionI, QuestionModelI, QuestionOptionsI} from "../../Core/Model/RequestModel/QuestionModel";



const QuestionSchema = new Schema<QuestionModelI>({
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
const QuestionModel = mongoDb.model<QuestionModelI>("Questions",QuestionSchema,"QuestionCollection")
export {QuestionSchema,QuestionModel}