export interface IWrite<T> {
    create(item: T):void
    update(id: string, item: T): Promise<void>;
    delete(id: string): Promise<void>;
}


export interface IRead<T> {
    find(item: T): Promise<T[]>;
    findOne(id: string): Promise<void>;
}