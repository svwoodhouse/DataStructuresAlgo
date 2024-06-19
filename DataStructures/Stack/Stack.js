var Stack = /** @class */ (function () {
    function Stack() {
        this.collection = [];
    }
    Stack.prototype.push = function (data) {
        this.collection.push(data);
    };
    Stack.prototype.pop = function () {
        return this.collection.pop();
    };
    Stack.prototype.front = function () {
        return this.collection[this.collection.length - 1];
    };
    Stack.prototype.size = function () {
        return this.collection.length;
    };
    Stack.prototype.empty = function () {
        return this.collection.length === 0;
    };
    Stack.prototype.print = function () {
        console.log(this.collection);
    };
    return Stack;
}());
;
var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
stack.pop();
stack.print();
var stringStack = new Stack();
stringStack.push("1");
stringStack.push("2");
stringStack.push("3");
stringStack.print();
stringStack.pop();
stringStack.print();
