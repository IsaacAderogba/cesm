import { char } from "@factories/char";
import { opt } from "@factories/opt";
import { it, expect } from "vitest";

it("returns true for a valid state", () => {
  const re = opt(char("a"))
  expect(re.test("")).toEqual(true);
  expect(re.test("a")).toEqual(true);
});

it("returns false for an invalid state", () => {
  const re = opt(char("a"))
  expect(re.test("aa")).toEqual(false);
});
