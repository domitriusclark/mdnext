export default function alertQueue(state, setState, item) {
  // Add the item to the state queue
  setState((prev) => prev.unshift(item));

  // After 4 seconds, remove the item from the queue
  setTimeout(() => setState((prev) => prev.pop()), 4000);

  return {
    enqueue(item) {
      queue.unshift(item);
    },
    dequeue(item) {
      queue.pop;
    },
    peek() {
      queue.length;
    },
    get length() {
      queue.length;
    },
    isEmpty() {
      queue.length === 0;
    },
  };
}
