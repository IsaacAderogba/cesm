import { and } from "@factories/and";
import { char } from "@factories/char";
import { it, expect } from "vitest";

it("returns true for a valid state", () => {
  const re = and(char("a"), char("b"), char("c"));
  expect(re.test("abc")).toEqual(true);
});

it("returns false for an invalid state", () => {
  const re = and(char("a"), char("b"), char("c"));
  expect(re.test("aba")).toEqual(false);
});
