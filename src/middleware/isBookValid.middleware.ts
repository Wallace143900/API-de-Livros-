import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../error/AppError";

export class IsBookValid{
    static execute(request: Request, response: Response, next: NextFunction){
        const id = +request.params.id;

        if(!booksDatabase.some(book => book.id === id)){
            throw new AppError("Book not found.", 404);
        }
        next();
    }
}