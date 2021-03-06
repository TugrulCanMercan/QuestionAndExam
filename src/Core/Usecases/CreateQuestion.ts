import mongoDb from "mongoose";


import {Request,Response} from "express";
import QuestionRepo from "../../Infrastructures/Repositories/QuestionRepository";

import { QuestionModelI} from "../Model/RequestModel/QuestionModel";
import mongoModels from "../../Infrastructures/Mongo-Model/questionModel";


export default async (req:Request,questionRepo:QuestionRepo) => {

    const question = mongoDb.model<QuestionModelI>("Question",mongoModels)
    const addQuestion = new question({
        questionsCategory: req.body.questionsCategory,
        questionsDifficultyRate:req.body.questionsDifficultyRate,
        questionLikeRate:req.body.questionLikeRate,
        question:{
        questionsAnswer:req.body.question.questionsAnswer,
            questionOptions:{
            A:req.body.question.questionOptions.A,
                B:req.body.question.questionOptions.B,
                C:req.body.question.questionOptions.C,
                D:req.body.question.questionOptions.D,
                E:req.body.question.questionOptions.E
        }
    }

})
await questionRepo.addQuestion(addQuestion)

}