/** QueueStr: can remove from start or add to end */

import { IndexError } from "../common/ll";

class QueueStr {
  _array: string[];

  constructor(initial: string[] = []) {
    this._array = initial;
  }

  /** enqueue(val): add val to end. Returns undefined. */
  enqueue(val: string): void {
    this._array.push(val);
  }

  /** dequeue(): remove & return item from start.
   * Throws error if empty. */
  dequeue(): string {
    if (this._array.length === 0) throw new IndexError();
    return this._array.shift()!;
  }

  /** peek(): return the value of top. */
  peek(): string {
    if (this._array.length === 0) throw new IndexError();
    return this._array[0];
  }

  /** : return true if queue is empty. */
  isEmpty(): boolean {
    return this._array.length === 0;
  }

}

export { QueueStr };
