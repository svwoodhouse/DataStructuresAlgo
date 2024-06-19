class Stack:
    def __init__(self):
        self.collection = []
    
    def push(self, data):
        self.collection.append(data)
    
    def pop(self):
       return self.collection.pop()
    
    def front(self):
        return self.collection[self.size() - 1]
    
    def size(self):
        return len(self.collection)
    
    def empty(self):
        return len(self.collection) == 0
    
    def print(self):
        print(self.collection)


stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.print()
stack.pop()
stack.print()


stringStack = Stack()
stringStack.push("1")
stringStack.push("2")
stringStack.push("3")
stringStack.print()
stringStack.pop()
stringStack.print()