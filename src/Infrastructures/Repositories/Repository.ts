import mongoose from "mongoose";


interface Read<T> {
    retrieve: (callback: (error: any, result: any)=> void)=> void;
    findById: (id: string, callback: (error:any, result: T) => void) => void;
}
interface Write<T> {
    create: (item:T, callback: (error: any, result: any ) => void) => void;
    update:(_id: mongoose.Types.ObjectId, item:T, callback: (error: any, result: any)=> void) => void ;
    delete: (_id: string, callback: (error: any, result: any) => void) => void;

}


class RepositoryBase<T extends mongoose.Document> implements Read<T>, Write<T> {

    private _model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    create(item: T, callback: (error: any, result: any) => void): void {
    }

    delete(_id: string, callback: (error: any, result: any) => void): void {
    }

    findById(id: string, callback: (error: any, result: T) => void): void {
    }

    retrieve(callback: (error: any, result: any) => void): void {
    }

    update(_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void): void {
    }
}

