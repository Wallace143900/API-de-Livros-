import { expect } from "vitest";

export const bookDefaultExpects = (book) => {
   const date = new Date();
   const year = date.getFullYear();

   expect(book).toBeTypeOf("object");

   expect(book.id).toBeDefined();
   expect(book.id).toBeTypeOf("number");

   expect(book.name).toBeDefined();
   expect(book.name).toBeTypeOf("string");

   expect(book.pages).toBeDefined();
   expect(book.pages).toBeTypeOf("number");

   expect(book.createdAt).toBeDefined();
   expect(String(book.createdAt)).toContain(year);

   expect(book.updatedAt).toBeDefined();
   expect(String(book.createdAt)).toContain(year);
};
