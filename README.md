# CESM, a toolkit for building content expression state machines

[CESM](https://github.com/IsaacAderogba/cesm) (Content Expression State Machine) is s a JavaScript toolkit for building state machines that match content expressions.

“Content expression” is a term coined from [Prosemirror](https://prosemirror.net/docs/guide/), where regex-like expressions are used to constrain text editor schemas. CESM can be used for similar purposes.

> CESM, like many of my projects, has been primarily built for my use cases. If you wish to extend the base functionality, you're encouraged to fork the package.

## Guides

#### Installation

CESM can be installed as a library from NPM.

```Bash
npm install @iatools/cesm
```

You can then use CESM’s functional API to construct different content expressions. The following demonstrates how we might construct `xy*|z`.

```typescript
import { or, and, char, rep } from "@iatools/cesm";

const re = or(
  and(
    char("x"),
    rep(
      char("y")
      )
  ),
  char("z")
);

re.test("x") // true
re.test("xyy") // true
re.test("z") // true
re.test("a") // false
```

Importantly, CESM doesn’t support partial matching of a string. This would violate the anticipated usage for content expressions like those seen in Prosemirror.

## Docs

#### States

In CESM, a *state* is a node in the state machine graph. Each graph can only have one accepting state, which is the last input character.

For example, a simple character can be built with just two states:

```typescript
import { NFA, State } from "@iatools/cesm";

export const char = (symbol: string): NFA => {
  const inputState = new State();
  const outputState = new State({ isAccepting: true });
  inputState.addTransition(symbol, outputState);

  return new NFA({ inputState, outputState });
};
```

This can then be used to match single characters.

```typescript
const re = char("a");
re.test("a"); // true
re.test("b"); // false
```

On most occassions, you won’t be dealing with individual states. Rather, you’ll be working with the higher abstraction `Machine`s that are easily composable.

#### Machines

CESM supports building an `NFA` state machine.

A `Machine` is a simple wrapper over an `inputState` and an `outputState`. On most occassions, you'll be interacting with the `test` method on such machines that return `true` for valid patterns and `false` for invalid ones.

The real strength of a machine is in their composability. Expressions such as `xy*|z` are compositions of the following machines:

```typescript
import { or, and, char, rep } from "@iatools/cesm";

const re = or(
  and(
    char("x"),
    rep(
      char("y")
      )
  ),
  char("z")
);
```

#### Factories

Factory functions provide a simplified interface for constructing state machines. CESM currently supports the following machines:

- `char` machine for matching against single characters.
- `eps` machine for matching against empy characters.
- `and` machine for concatenating two sub-machines.
- `or` machine for a disjunction on two sub-machines.
- `rep` machine for repeating a sub-machine zero or more times.
- `plus` machine for repeating a sub-machine one or more times.
- `opt` machine for matching a sub-machine zero or once.

In truth, `char`, `eps`, `and`, `or`, and `rep` are the fundamental building block machines that all other machines can be built on top of.

