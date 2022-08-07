import { State } from "@state/State";

export interface NFAProps {
  inState: State;
  outState: State;
}

export class NFA {
  inState: NFAProps["inState"];
  outState: NFAProps["outState"];

  constructor(props: NFAProps) {
    this.inState = props.inState;
    this.outState = props.outState;
  }

  test(string: string) {
    return this.inState.test(string);
  }
}
