import express, { json } from "express";
import { bookRouter } from "./routes/book.routes";
import { HandleErrors } from "./middleware/handleErrors.middleware";
import helmet from "helmet";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/books", bookRouter);

app.use(HandleErrors.execute);