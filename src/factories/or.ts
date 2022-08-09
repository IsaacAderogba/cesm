import { Machine } from "@machine/Machine";
import { State } from "@state/State";
import { EPSILON } from "@utils/symbols";

export const orPair = (first: Machine, second: Machine): Machine => {
  const inputState = new State();
  inputState.addTransition(EPSILON, first.inputState);
  inputState.addTransition(EPSILON, second.inputState);

  const outputState = new State({ isAccepting: true });
  first.outputState.addTransition(EPSILON, outputState);
  second.outputState.addTransition(EPSILON, outputState);

  first.outputState.setProps({ isAccepting: false });
  second.outputState.setProps({ isAccepting: false });
  return new Machine({ inputState, outputState });
};

export const or = (first: Machine, ...rest: Machine[]): Machine => {
  for (const machine of rest) {
    first = orPair(first, machine);
  }

  return first;
};
