import ExamRepository from "../Infrastructures/Repositories/ExamRepository";
import {Request} from "express";
import createExamUsecase from "../Core/Usecases/CreateExamUsecase";




export default class ExamController{
    constructor(
        private readonly examRepo:ExamRepository
    ) {
    }
    async createExam(req:Request){
        await createExamUsecase(req,this.examRepo).then((res)=>{
            console.log("kayıt başarılı")
        })
    }
}