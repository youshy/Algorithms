// Queue - first in, first out (FIFO) data structure

export class Queue<T> {
  _store: T[] = [];
  push(val: T) {
    this._store.push(val);
  }
  pop(): T | undefined {
    return this._store.shift();
  }
}

// JS-based - can be used with *push* and *shift* methods
