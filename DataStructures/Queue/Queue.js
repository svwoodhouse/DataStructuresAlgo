var Queue = /** @class */ (function () {
    function Queue() {
        this.collection = [];
    }
    Queue.prototype.enqueue = function (data) {
        this.collection.push(data);
    };
    Queue.prototype.dequeue = function () {
        return this.collection.shift();
    };
    Queue.prototype.front = function () {
        return this.collection[0];
    };
    Queue.prototype.size = function () {
        return this.collection.length;
    };
    Queue.prototype.empty = function () {
        return this.collection.length === 0;
    };
    Queue.prototype.print = function () {
        console.log(this.collection);
    };
    return Queue;
}());
;
var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
queue.dequeue();
queue.print();
var stringQueue = new Queue();
stringQueue.enqueue("1");
stringQueue.enqueue("2");
stringQueue.enqueue("3");
stringQueue.print();
stringQueue.dequeue();
stringQueue.print();
