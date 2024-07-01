import { app } from "../app";
import supertest from "supertest";

export const request = supertest(app);