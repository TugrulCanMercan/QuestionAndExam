import mongoose, {Model} from "mongoose";
import {ExamModelI} from "../../Core/Model/RequestModel/ExamModel";
import mongoDb from "mongoose";
import model from "../../Core/Usecases/CreateExamUsecase";
import examModel from "../Mongo-Model/examModel";
//
import  {IWrite,IRead} from "../../Core/Interfaces/RepositoryI";


export default abstract class Repository<T> implements IWrite<T>,IRead<T>{

    constructor(
        public examModel:mongoose.Model<T>
    ) {
    }


     async create(item: T):Promise<string>{
        return new Promise((resolve, reject)=>{
            this.examModel.create(item,(err,res)=>{
                if(err){
                    reject( `hata: ${err}`)
                }else{
                    resolve("Kayıt Başarılı")
                }
            })
        })
    }

    async delete(id: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    find(item: T): Promise<T[]> {
        return Promise.resolve([]);
    }

    findOne(id: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    update(id: string, item: T): Promise<void> {
        return Promise.resolve(undefined);
    }


}







// export default class BaseRepository<T>  {
//
//     constructor(
//         public examModel:mongoose.Model<T>
//     ) {
//
//     }
//
//     async create_func(item:T){
//        this.examModel.create(item,(a,v)=>{
//
//        })
//
//     }
//
// }