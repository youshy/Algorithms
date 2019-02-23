// Stack - last in, first out (LIFO) data structure

export class Stack<T> {
  _store: T[] = [];
  push(val: T) {
    this._store.push(val);
  }
  pop(): T | undefined {
    return this._store.pop();
  }
}

// JS-based - can be used with *push* and *pop* methods
