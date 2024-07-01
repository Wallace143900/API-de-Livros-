import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export class validateBody{
    static execute(schema: ZodSchema){
        return (request: Request, response: Response, next: NextFunction) => {
            request.body = schema.parse(request.body);

            next();
        }
    }
}