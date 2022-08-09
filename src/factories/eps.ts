import { Machine } from "@machine/Machine";
import { EPSILON } from "@utils/symbols";
import { char } from "./char";

export const eps = (): Machine => {
  return char(EPSILON);
};
