import { Machine } from "@machine/Machine";
import { State } from "@state/State";
import { EPSILON } from "@utils/symbols";

export const rep = (machine: Machine): Machine => {
  const inputState = new State();
  const outputState = new State({ isAccepting: true });

  inputState.addTransition(EPSILON, outputState);
  inputState.addTransition(EPSILON, machine.inputState);
  machine.outputState.addTransition(EPSILON, outputState);
  outputState.addTransition(EPSILON, machine.inputState);

  machine.outputState.setProps({ isAccepting: false });
  return new Machine({ inputState, outputState });
};
