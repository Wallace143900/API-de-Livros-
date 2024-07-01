import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../error/AppError";

export class IsBookValidSameName{
    static execute(request: Request, response: Response, next: NextFunction){
        const name = request.body.name;

        if(booksDatabase.some(book => book.name === name )){
            throw new AppError("Book already registered.", 409);
        }
        next();
    }
}