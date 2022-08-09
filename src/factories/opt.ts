import { Machine } from "@machine/Machine";
import { eps } from "./eps";
import { or } from "./or";

export const opt = (machine: Machine): Machine => {
  return or(machine, eps());
};
