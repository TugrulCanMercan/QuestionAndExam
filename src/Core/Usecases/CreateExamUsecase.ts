import examModel from "../../Infrastructures/Mongo-Model/examModel";
import mongoDb from "mongoose";
import {ExamModelI} from "../Model/RequestModel/ExamModel";
import {QuestionModelI} from "../Model/RequestModel/QuestionModel";
import {Request} from "express";
import ExamRepository from "../../Infrastructures/Repositories/ExamRepository";
// examTitle:string
// examCategory:string
// examStartTime:Date
// examEndTime:Date
// examQuestions:QuestionModelI[]
// examTotalPoint:number
export default async (req:Request,examRepo:ExamRepository) => {
    const ExamModel = mongoDb.model<ExamModelI>("Exam",examModel)
    const createExam = new ExamModel({
        examTitle:req.body.examTitle,
        examCategory:req.body.examCategory,
        examStartTime:req.body.examStartTime,
        examEndTime:req.body.examEndTime,
        examQuestions:req.body.examQuestions,
        examTotalPoint:req.body.examTotalPoint
    })
    await examRepo.addExam(createExam)
}