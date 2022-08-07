import { it, expect } from "vitest";
import { epsilon } from "@factories/epsilon";

it("returns true for a valid state", () => {
  const re = epsilon();
  expect(re.test("")).toEqual(true);
});

it("returns false for an invalid state", () => {
  const re = epsilon();
  expect(re.test("a")).toEqual(false);
});
