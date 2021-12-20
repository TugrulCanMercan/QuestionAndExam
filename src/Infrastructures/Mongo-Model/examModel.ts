import mongoDb, {Schema} from "mongoose";
import {ExamModelI} from "../../Core/Model/RequestModel/ExamModel";
import {QuestionSchema} from "./questionModel";




const ExamSchema = new Schema<ExamModelI>({
    examTitle: String,
    examCategory:String,
    examStartTime:Date,
    examEndTime:Date,
    examQuestions:  [QuestionSchema],
    examTotalPoint:Number
})
const ExamModel = mongoDb.model<ExamModelI>("Exams",ExamSchema,"ExamCollection")
export default ExamModel