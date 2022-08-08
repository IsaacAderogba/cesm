import { or } from "@factories/or";
import { char } from "@factories/char";
import { it, expect } from "vitest";

it("returns true for a valid state", () => {
  const re = or(char("a"), char("b"), char("c"));
  expect(re.test("a")).toEqual(true);
  expect(re.test("b")).toEqual(true);
  expect(re.test("c")).toEqual(true);
});

it("returns false for an invalid state", () => {
  const re = or(char("a"), char("b"), char("c"));
  expect(re.test("d")).toEqual(false);
});
