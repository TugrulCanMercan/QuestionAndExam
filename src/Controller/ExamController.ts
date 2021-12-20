import {Request} from "express";
import createExamUsecase from "../Core/Usecases/CreateExamUsecase";
import ExamRepository from "../Infrastructures/Repositories/ExamRepository";





export default class ExamController{
    constructor(
        private readonly examRepo:ExamRepository
    ){
    }
    async createExam(req:Request){

        const questionCount = req.body.examQuestions.length
        if (questionCount >= 2){
            await createExamUsecase(req,this.examRepo).then((res)=>{
                console.log("kayıt başarılı")
                return "kayıt başarılı"
            })
        }else{
            return `lütfen ${2-questionCount} soru daha ekleyin`
        }

    }
}