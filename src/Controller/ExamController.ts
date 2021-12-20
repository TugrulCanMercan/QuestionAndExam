import {Request} from "express";
import createExamUsecase from "../Core/Usecases/CreateExamUsecase";
import ExamRepository from "../Infrastructures/Repositories/ExamRepository";
import {ResponseI} from "../Core/Model/ResponseModel/Response";


export default class ExamController {
    constructor(
        private readonly examRepo: ExamRepository
    ) {
    }

    async createExam(req: Request) {

        const questionLength = req.body.examQuestions.length

        if (questionLength >= 3) {
            const response = await createExamUsecase(req, this.examRepo)
            const responseDto: ResponseI<null | undefined> = {
                data: null,
                message: "kayıt başarılı",
                status: "200"
            }
            return responseDto
        } else {
            const response: ResponseI<null | undefined> = {
                data: null,
                message: `lütfen ${3 - questionLength} soru daha ekleyin`,
                status: "400"
            }
            return response
        }

    }
}