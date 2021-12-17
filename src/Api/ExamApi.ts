import ExamApi from "../Helper/Router";
import ExamRepository from "../Infrastructures/Repositories/ExamRepository";
import ExamController from "../Controller/ExamController";

const examRepo = new ExamRepository()
ExamApi.post("/creatExam",async (req,res)=>{
    const examController = new ExamController(examRepo)
    await examController.createExam(req)
    res.send("bakalım neler oluyor")
})
export default ExamApi