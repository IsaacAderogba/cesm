import { State } from "@state/State";

export interface MachineProps {
  inputState: State;
  outputState: State;
}

export class Machine {
  inputState: MachineProps["inputState"];
  outputState: MachineProps["outputState"];

  constructor(props: MachineProps) {
    this.inputState = props.inputState;
    this.outputState = props.outputState;
  }

  test(string: string) {
    return this.inputState.test(string);
  }
}
