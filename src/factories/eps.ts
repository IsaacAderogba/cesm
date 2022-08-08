import { NFA } from "@machines/NFA";
import { EPSILON } from "@utils/symbols";
import { char } from "./char";

export const eps = (): NFA => {
  return char(EPSILON);
};
