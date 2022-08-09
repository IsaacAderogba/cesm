import { Machine } from "@machine/Machine";
import { and } from "./and";
import { rep } from "./rep";

export const plus = (machine: Machine): Machine => {
  return and(machine, rep(machine));
};
