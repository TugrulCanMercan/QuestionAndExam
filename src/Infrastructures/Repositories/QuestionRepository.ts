import {QuestionModelI} from "../../Core/Model/RequestModel/QuestionModel";


export default class questionRepository{

    constructor() {
    }

    async addQuestion(question:QuestionModelI){
            await question.save()

    }

}

// return new Promise<string>((resolve,reject)=>{
//     user.save().then(()=>{
//         console.log("kayıt başarıyla tamamlandı")
//         resolve("kayıt başarıyla tamamlandı")
//     })
//         .catch(()=>{
//             console.log("kayıt başarısız")
//             reject("kayıt başarısız")
//         });
// })