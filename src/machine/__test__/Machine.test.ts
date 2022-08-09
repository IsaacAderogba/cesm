import { it, expect } from "vitest";
import { or } from "@factories/or";
import { and } from "@factories/and";
import { char } from "@factories/char";
import { rep } from "@factories/rep";

it("returns true for valid states of a compound machine", () => {
  // /xy*|z/
  const re = or(and(char("x"), rep(char("y"))), char("z"));
  expect(re.test("x")).toEqual(true);
  expect(re.test("xy")).toEqual(true);
  expect(re.test("xyy")).toEqual(true);
  expect(re.test("z")).toEqual(true);
});

it("returns false for valid states of a compound machine", () => {
  const re = or(and(char("x"), rep(char("y"))), char("z"));
  expect(re.test("a")).toEqual(false);
  expect(re.test("")).toEqual(false);
});
