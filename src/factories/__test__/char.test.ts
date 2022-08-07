import { it, expect } from "vitest";
import { char } from "@factories/char";

it("returns true for a valid state", () => {
  const re = char("a");
  expect(re.test("a")).toEqual(true);
});

it("returns false for an invalid state", () => {
  const re = char("a");
  expect(re.test("a")).toEqual(false);
});
