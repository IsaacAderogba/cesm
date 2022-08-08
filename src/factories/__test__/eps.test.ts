import { it, expect } from "vitest";
import { eps } from "@factories/eps";

it("returns true for a valid state", () => {
  const re = eps();
  expect(re.test("")).toEqual(true);
});

it("returns false for an invalid state", () => {
  const re = eps();
  expect(re.test("a")).toEqual(false);
});
