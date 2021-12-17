import createQuestionsUsecases from "../Core/Usecases/CreateQuestion";
import questionRepository from "../Infrastructures/Repositories/QuestionRepository";
import {Request} from "express";


export default class QuestionsController{

    constructor(
        private readonly questionRepo:questionRepository
    ) {
    }

    createQuestions(req:Request){
        createQuestionsUsecases(req, this.questionRepo).then((res)=>{
            console.log("kayıt başarılı")
        })
    }
    getQuestion(req:Request){
        // getQuestionUsecases()
    }

    deleteQuestin(){

    }
    updateQuestion(){

    }
}