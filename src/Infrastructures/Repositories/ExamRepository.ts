import {ExamModelI} from "../../Core/Model/RequestModel/ExamModel";


export default class ExamRepository{
    constructor() {
    }

    async addExam(exam:ExamModelI){
        await exam.save()
    }
}