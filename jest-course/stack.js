class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    if (this.top === -1) {
      return null;
    }

    const poppedValue = this.items[this.top];
    delete this.items[this.top];
    this.top = -1;
    return poppedValue;
  }
}

module.exports = Stack;
