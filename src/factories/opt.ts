import { NFA } from "@machines/NFA";
import { eps } from "./eps";
import { or } from "./or";

export const opt = (machine: NFA): NFA => {
  return or(machine, eps());
};
