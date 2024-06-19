class Queue {
    collection = [];
    
    enqueue<S>(data: S): void {
        this.collection.push(data);
    }

    dequeue<S>(): S {
        return this.collection.shift();
    }

    front<S>(): S {
        return this.collection[0];
    }

    size(): number {
        return this.collection.length;
    }

    empty(): boolean {
        return this.collection.length === 0
    }

    print(): void {
        console.log(this.collection)
    }

};

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print()
queue.dequeue()
queue.print()

const stringQueue = new Queue()
stringQueue.enqueue("1")
stringQueue.enqueue("2")
stringQueue.enqueue("3")
stringQueue.print()
stringQueue.dequeue()
stringQueue.print()