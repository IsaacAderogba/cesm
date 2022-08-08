import { NFA } from "@machines/NFA";
import { State } from "@state/State";
import { EPSILON } from "@utils/symbols";

export const orPair = (first: NFA, second: NFA): NFA => {
  const inputState = new State();
  inputState.addTransition(EPSILON, first.inputState);
  inputState.addTransition(EPSILON, second.inputState);

  const outputState = new State({ isAccepting: true });
  first.outputState.addTransition(EPSILON, outputState);
  second.outputState.addTransition(EPSILON, outputState);

  first.outputState.setProps({ isAccepting: false });
  second.outputState.setProps({ isAccepting: false });
  return new NFA({ inputState, outputState });
};

export const or = (first: NFA, ...rest: NFA[]): NFA => {
  for (const fragment of rest) {
    first = orPair(first, fragment);
  }

  return first;
};
