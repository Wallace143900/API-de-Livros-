import { Router } from "express";
import { BookController } from "../controller/book.controllers";
import { IsBookValid } from "../middleware/isBookValid.middleware";
import { IsBookValidSameName } from "../middleware/isBookValidSameName.middleware";
import { validateBody } from "../middleware/validateBody.middleware";
import { createBookSchema, upadateBookSchema } from "../schemas/book.schemas";

export const bookRouter = Router();

const bookController = new BookController();

bookRouter.post("/", validateBody.execute(createBookSchema) ,IsBookValidSameName.execute, bookController.create);
bookRouter.get("/", bookController.getMany);
bookRouter.get("/:id", IsBookValid.execute, bookController.getOne);
bookRouter.patch("/:id", validateBody.execute(upadateBookSchema) ,IsBookValidSameName.execute, IsBookValid.execute, bookController.update);
bookRouter.delete("/:id", IsBookValid.execute, bookController.remove);