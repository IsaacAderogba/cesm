import { char } from "@factories/char";
import { plus } from "@factories/plus";
import { it, expect } from "vitest";

it("returns true for a valid state", () => {
  const re = plus(char("a"))
  expect(re.test("a")).toEqual(true);
  expect(re.test("aa")).toEqual(true);
  expect(re.test("aaa")).toEqual(true);
});

it("returns false for an invalid state", () => {
  const re = plus(char("a"))
  expect(re.test("")).toEqual(false);
});
