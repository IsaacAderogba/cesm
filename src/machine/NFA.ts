import { State } from "@state/State";

export interface NFAProps {
  inputState: State;
  outputState: State;
}

export class NFA {
  inputState: NFAProps["inputState"];
  outputState: NFAProps["outputState"];

  constructor(props: NFAProps) {
    this.inputState = props.inputState;
    this.outputState = props.outputState;
  }

  test(string: string) {
    return this.inputState.test(string);
  }
}
