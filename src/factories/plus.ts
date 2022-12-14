import { NFA } from "@machine/NFA";
import { and } from "./and";
import { rep } from "./rep";

export const plus = (machine: NFA): NFA => {
  return and(machine, rep(machine));
};
