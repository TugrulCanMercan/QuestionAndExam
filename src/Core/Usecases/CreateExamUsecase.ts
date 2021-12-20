
import {Request} from "express";
import ExamModel from "../../Infrastructures/Mongo-Model/examModel";
import ExamRepository from "../../Infrastructures/Repositories/ExamRepository";

export default async (req: Request, examRepo: ExamRepository) => {

    const createExam = new ExamModel({
        examTitle: req.body.examTitle,
        examCategory: req.body.examCategory,
        examStartTime: req.body.examStartTime,
        examEndTime: req.body.examEndTime,
        examQuestions: req.body.examQuestions,
        examTotalPoint: req.body.examTotalPoint
    })
    return await examRepo.create(createExam)

};
