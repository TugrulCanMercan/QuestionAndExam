import mongoDb, {Schema} from "mongoose";
import {ExamModelI} from "../../Core/Model/RequestModel/ExamModel";
import {QuestionModelI} from "../../Core/Model/RequestModel/QuestionModel";
import questionModel from "./questionModel";


const examModel = new Schema<ExamModelI>({
    examTitle: String,
    examCategory:String,
    examStartTime:Date,
    examEndTime:Date,
    examQuestions: [questionModel],
    examTotalPoint:Number
})

export default examModel