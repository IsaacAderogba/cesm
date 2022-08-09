import { Machine } from "@machine/Machine";
import { EPSILON } from "@utils/symbols";

export const andPair = (first: Machine, second: Machine): Machine => {
  first.outputState.setProps({ isAccepting: false });
  second.outputState.setProps({ isAccepting: true });

  first.outputState.addTransition(EPSILON, second.inputState);

  return new Machine({
    inputState: first.inputState,
    outputState: second.outputState,
  });
};

export const and = (first: Machine, ...rest: Machine[]): Machine => {
  for (const machine of rest) {
    first = andPair(first, machine);
  }

  return first;
};
