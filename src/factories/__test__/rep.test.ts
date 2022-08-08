import { it, expect } from "vitest";
import { char } from "@factories/char";
import { rep } from "@factories/rep";

it("returns true for a valid state", () => {
  const re = rep(char("a"));
  expect(re.test("a")).toEqual(true);
  expect(re.test("aa")).toEqual(true);
  expect(re.test("")).toEqual(true);
});

it("returns false for an invalid state", () => {
  const re = rep(char("a"));
  expect(re.test("b")).toEqual(false);
});
