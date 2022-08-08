import { NFA } from "@machines/NFA";
import { EPSILON } from "@utils/symbols";

export const andPair = (first: NFA, second: NFA): NFA => {
  first.outputState.setProps({ isAccepting: false });
  second.outputState.setProps({ isAccepting: true });

  first.outputState.addTransition(EPSILON, second.inputState);

  return new NFA({
    inputState: first.inputState,
    outputState: second.outputState,
  });
};

export const and = (first: NFA, ...rest: NFA[]): NFA => {
  for (const machine of rest) {
    first = andPair(first, machine);
  }

  return first;
};
