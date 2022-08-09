import { Machine } from "@machine/Machine";
import { State } from "@state/State";

export const char = (symbol: string): Machine => {
  const inputState = new State();
  const outputState = new State({ isAccepting: true });
  inputState.addTransition(symbol, outputState);

  return new Machine({ inputState, outputState });
};
