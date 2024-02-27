import { Stack, StackStr } from "../common/stack";

/** Return reverse of string. */

function stringReversal(str: string): string {
  const stack = new StackStr([...str]);
  let out = '';
  while (!stack.isEmpty()) {
    out += stack.pop();
  }

  return out;
}

export { stringReversal };