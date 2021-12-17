import * as mongoose from "mongoose";



export interface QuestionModelI extends mongoose.Document{
    questionsCategory:       string;
    questionsDifficultyRate: number;
    questionLikeRate:        number;
    question:                QuestionI;
}

export interface QuestionI extends mongoose.Document{
    questionsAnswer: string;
    questionOptions: QuestionOptionsI;
}

export interface QuestionOptionsI extends mongoose.Document{
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
}


