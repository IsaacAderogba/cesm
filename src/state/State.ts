export interface StateProps {
  isAccepting: boolean;
}

export class State {
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

  test(string: string, visited = new Set()): boolean {
    return true;
  }
}
