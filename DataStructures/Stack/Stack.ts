class Stack {
    collection = [];
    
    push<S>(data: S): void {
        this.collection.push(data);
    }

    pop<S>(): S {
        return this.collection.pop();
    }

    front<S>(): S {
        return this.collection[this.collection.length - 1];
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

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.print()
stack.pop()
stack.print()

const stringStack = new Stack()
stringStack.push("1")
stringStack.push("2")
stringStack.push("3")
stringStack.print()
stringStack.pop()
stringStack.print()