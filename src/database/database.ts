import { TBook } from "../interfaces/book.interface";

export const booksDatabase: TBook[] = [];

let id = 0;

export const generateID = () => {
    id++;

    return id;
}