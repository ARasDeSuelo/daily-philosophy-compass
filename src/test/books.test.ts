import { describe, expect, it } from "vitest";
import { books } from "@/content/books";
import { getPost } from "@/content/posts";

describe("Recomendaciones de libros", () => {
  it("cada recomendación enlaza a un ensayo existente", () => {
    for (const book of books) {
      expect(getPost(book.essaySlug), book.title).toBeDefined();
    }
  });
});