import { expect } from "vitest";

export const errorDefaultExpects = (data) => {
   expect(data).toBeTypeOf("object");

   expect(data.error).toBeDefined();
   expect(data.error).toBeTypeOf("string");
};
