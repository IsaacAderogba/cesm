import { NFA } from "@machines/NFA";
import { EPSILON } from "@utils/symbols";
import { char } from "./char";

export const epsilon = (): NFA => {
  return char(EPSILON);
};
