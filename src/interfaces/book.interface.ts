import { z } from "zod";
import { bookSchema, createBookSchema, upadateBookSchema } from "../schemas/book.schemas";

export type TBook = z.infer<typeof bookSchema>;

export type TCreateBookData = z.infer<typeof createBookSchema>;
export type TUpdateBookData = z.infer<typeof upadateBookSchema>;