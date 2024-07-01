import { describe, it, beforeAll, expect } from "vitest";
import { errorDefaultExpects } from "./utils/errorDefaultExpects";
import { request } from "./setupFiles";
import { booksDatabase } from "../database/database";
import { firstBookMock } from "./__mocks/books";

describe("delete book", () => {
  beforeAll(() => {
    booksDatabase.push(firstBookMock());
  });

  it("should be able to delete a car sucessfully", () => {
    request.delete("/books/1").expect(204);
  });

  it("should throw error when the id is incorrect", async () => {
    const data = await request
      .delete("/books/2")
      .expect(404)
      .then((response) => response.body);

    errorDefaultExpects(data);
    expect(data.error).toEqual("Book not found.");
  });
});
