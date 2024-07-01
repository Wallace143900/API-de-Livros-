import { z } from "zod";

export const bookSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(3).max(60),
    pages: z.number().positive().min(1),
    category: z.string().min(1).optional(),
    createdAt: z.date(),
    updatedAt: z.date().optional()
});

export const createBookSchema = bookSchema.pick({
    name: true, pages: true, category: true
});

export const upadateBookSchema = createBookSchema.partial();