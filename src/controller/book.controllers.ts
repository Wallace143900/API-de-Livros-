import { Request, Response } from "express";
import { BookService } from "../services/book.services";

export class BookController{
    create(request: Request, response: Response){
        const bookService = new BookService();

        const book = bookService.create(request.body);

        return response.status(201).json(book);
    }

    getMany(request: Request, response: Response){
        const bookService = new BookService();

        const books = bookService.getMany(request.query.search as string, request.query.category as string);

        return response.status(200).json(books);
    }

    getOne(request: Request, response: Response){
        const bookService = new BookService();

        const book = bookService.getOne(+request.params.id);

        return response.status(200).json(book);
    }

    update(request: Request, response: Response){
        const bookService = new BookService();

        const books = bookService.update(+request.params.id, request.body);

        return response.status(200).json(books);
    }

    remove(request: Request, response: Response){
        const bookService = new BookService();

        bookService.remove(+request.params.id);

        return response.status(204).json();
    }
}