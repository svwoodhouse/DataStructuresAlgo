class Queue:
    def __init__(self):
        self.collection = []
    
    def enqueue(self, data):
        self.collection.append(data)
    
    def dequeue(self):
        return self.collection.pop(0)
    
    def front(self):
        return self.collection[0]
    
    def size(self):
        return len(self.collection)
    
    def empty(self):
        return self.size() == 0
    
    def print(self):
        print(self.collection)
    

queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print()
queue.dequeue()
queue.print()

stringQueue = Queue()
stringQueue.enqueue("1")
stringQueue.enqueue("2")
stringQueue.enqueue("3")
stringQueue.print()
stringQueue.dequeue()
stringQueue.print()