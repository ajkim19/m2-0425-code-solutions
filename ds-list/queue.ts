export type Node<T> = {
  data: T;
  priority: number;
};

export class PriorityQueue<T = unknown> {
  nodes: Node<T>[] = [];

  /**
   * Adds a value to the queue with given priority.
   * Higher priority values are dequeued first.
   * If priority already exists, first one in is dequeued first.
   */
  enqueue(value: T, priority: number): void {
    // Not implemented
  }

  /**
   * Removes and returns highest priority value in the queue.
   * Returns `undefined` if queue is empty.
   */
  dequeue(): T | undefined {
    return undefined;
  }

  /**
   * Returns highest priority value in the queue without removing it.
   * Returns `undefined` if queue is empty.
   */
  peek(): T | undefined {
    return undefined;
  }
}
