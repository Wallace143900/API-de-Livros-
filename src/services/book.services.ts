import { booksDatabase, generateID } from "../database/database";
import { TBook, TCreateBookData, TUpdateBookData } from "../interfaces/book.interface";

export class BookService{
    create(data: TCreateBookData){
        const now = new Date();

        const newBook: TBook = {
            id: generateID(),
            ...data,
            createdAt: now,
            updatedAt: now
        }

        booksDatabase.push(newBook);

        return newBook;
    }

    getMany(search?: string, category?: string ){
        const results = search || category ?booksDatabase.filter((book) => {
                return (
                    book.name.toLocaleLowerCase().includes(search!.toLocaleLowerCase()) || book.category === category
                );
            
        })
        : booksDatabase;

        return results;
    }

    getOne(id: number){
        const book = booksDatabase.find((book) => book.id === id);

        return book;
    }

    update(id: Number, data: TUpdateBookData){
        const currentBook = booksDatabase.find((book) => book.id === id) as TBook;

        const now = new Date;

        const upadateBook: TBook = {
            ...currentBook, ...data,
            updatedAt: now
        }

        const index = booksDatabase.findIndex((book) => book.id === id);

        booksDatabase.splice(index, 1, upadateBook);

        return upadateBook;
    }

    remove(id: Number){
        const index = booksDatabase.findIndex((book) => book.id === id);

        booksDatabase.splice(index, 1);

    }
}