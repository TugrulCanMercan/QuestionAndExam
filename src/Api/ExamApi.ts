import ExamApi from "../Helper/Router";
import ExamRepository from "../Infrastructures/Repositories/ExamRepository";
import ExamController from "../Controller/ExamController";
import ExamModel from "../Infrastructures/Mongo-Model/examModel";


const examRepository = new ExamRepository(ExamModel)
ExamApi.post("/creatExam",async (req,res)=>{
    const examController = new ExamController(examRepository)
    await examController.createExam(req).then((result)=>{
        res.send(result)
    })

})
export default ExamApi