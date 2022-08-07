import { NFA } from "@machines/NFA";
import { State } from "@state/State";

export const char = (symbol: string): NFA => {
  const inputState = new State();
  const outputState = new State({ isAccepting: true });
  inputState.addTransition(symbol, outputState);

  return new NFA({ inputState, outputState });
};
