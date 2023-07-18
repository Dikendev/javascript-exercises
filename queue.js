class Queue {
  constructor() {
    this.queue = [];
  }
  add(n) {
    this.queue.unshift(n)
  }
  remove() {
    return this.queue.pop();
  }
}

const queue = new Queue();
queue.add(2);
queue.add(12);
queue.add(35);

let remove = queue.remove()


console.log(queue, remove)