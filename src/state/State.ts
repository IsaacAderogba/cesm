import { EPSILON } from "@utils/symbols";
import { v4 as uuidv4 } from "uuid";
export interface StateProps {
  isAccepting: boolean;
}

export class State {
  id = uuidv4();
  isAccepting: StateProps["isAccepting"];
  private transitionsMap: Map<string, State[]> = new Map();

  constructor(props: StateProps = { isAccepting: false }) {
    this.isAccepting = props.isAccepting;
  }

  addTransition(symbol: string, state: State): void {
    const transitions = this.transitionsMap.get(symbol) || [];
    transitions.push(state);
    this.transitionsMap.set(symbol, transitions);
  }

  getTransition(symbol: string): State[] {
    return this.transitionsMap.get(symbol) || [];
  }

  test(string: string, visited = new Set<State>()): boolean {
    if (visited.has(this)) return false;
    visited.add(this);

    if (string.length === 0) {
      if (this.isAccepting) return true;
      for (const nextState of this.getTransition(EPSILON)) {
        if (nextState.test("", visited)) return true;
      }
      return false;
    }

    const symbol = string[0];
    const remainingString = string.slice(1);
    for (const nextState of this.getTransition(symbol)) {
      if (nextState.test(remainingString)) return true;
    }

    for (const nextState of this.getTransition(EPSILON)) {
      if (nextState.test(string, visited)) return true;
    }

    return false;
  }
}
