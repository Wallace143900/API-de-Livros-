import { describe, it, expect, beforeAll } from "vitest";
import { bookDefaultExpects } from "./utils/bookDefaultExpects";
import { errorDefaultExpects } from "./utils/errorDefaultExpects";
import { request } from "./setupFiles";
import { booksDatabase } from "../database/database";

describe("create book", () => {
  beforeAll(() => {
    booksDatabase.length = 0;
  });

  it("should be able to create a book sucessfully", async () => {
    const data = await request
      .post("/books")
      .send({
        name: "Harry Potter",
        pages: 325,
        category: "fantasia",
      })
      .expect(201)
      .then((response) => response.body);

    bookDefaultExpects(data);

    expect(data.category).toBeDefined();
    expect(data.category).toBeTypeOf("string");
    expect(data.id).toEqual(1);
  });

  it("should be able to create a book without a category", async () => {
    const data = await request
      .post("/books")
      .send({
        name: "Jogos Vorazes",
        pages: 225,
      })
      .expect(201)
      .then((response) => response.body);

    bookDefaultExpects(data);

    expect(data.category).toBeUndefined();
    expect(data.id).toEqual(2);
  });

  it("should not be able to create a book with the same name", async () => {
    const data = await request
      .post("/books")
      .send({
        name: "Jogos Vorazes",
        pages: 225,
      })
      .expect(409)
      .then((response) => response.body);

    errorDefaultExpects(data);
    expect(data.error).toEqual("Book already registered.");
  });

  it("should throw error when there is a missing body parameter", async () => {
    const data = await request
      .post("/books")
      .send({
        category: "Example",
      })
      .expect(409)
      .then((response) => response.body);

    expect(data.issues).toHaveLength(2);

    expect(data.issues[0]).toBeTypeOf("object");
    expect(data.issues[0].message).toBe("Required");

    expect(data.issues[1]).toBeTypeOf("object");
    expect(data.issues[1].message).toBe("Required");
  });

  it("should throw error when some invalid value type are sent", async () => {
    const data = await request
      .post("/books")
      .send({
        name: 123,
        pages: "Otavio",
        category: "Example",
      })
      .expect(409)
      .then((response) => response.body);

    expect(data.issues).toHaveLength(2);

    expect(data.issues[0]).toBeTypeOf("object");
    expect(data.issues[0].message).toBe("Expected string, received number");

    expect(data.issues[1]).toBeTypeOf("object");
    expect(data.issues[1].message).toBe("Expected number, received string");
  });
});
