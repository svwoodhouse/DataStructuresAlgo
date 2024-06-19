var NodeClass = /** @class */ (function () {
    function NodeClass(value) {
        this.value = value;
        this.next = null;
    }
    return NodeClass;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    SinglyLinkedList.prototype.pop = function () {
        if (!this.head)
            return;
        var prev = this.head;
        var temp = this.head.next;
        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }
        prev.next = null;
        this.tail = prev;
        return this;
    };
    SinglyLinkedList.prototype.push = function (value) {
        var node = new NodeClass(value);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    };
    return SinglyLinkedList;
}());
var list = new SinglyLinkedList();
list.push(2);
list.push(4);
console.log(list.push(3));
console.log(list.pop());
console.log(list.push(5));
