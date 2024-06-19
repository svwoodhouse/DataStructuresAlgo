import { nextTick } from "process";

class NodeClass<T> {
    value: T;
    next: NodeClass<T>;

    constructor(value: T){
        this.value = value
        this.next = null
    }
}

interface LinkedList<T> {
    push(value: T): SinglyLinkedList<T>;
    pop(): NodeClass<T>;
    shift(): NodeClass<T>;
    unshift(value: T): SinglyLinkedList<T>;
    get(index: number): NodeClass<T>
    set(index: number, value: T): boolean
    insert(index: number, value: T): boolean
    print(): void
    remove(index: number): T
    reverse(): SinglyLinkedList<T>
    size(): number
  }
  
class SinglyLinkedList<T> implements LinkedList<T> {
    head: NodeClass<T>;
    tail: NodeClass<T>;
    length: number;

    constructor(){
        this.head = null
        this.tail = null
        this.length = 0;
    }

    pop(): NodeClass<T> {
        if(!this.head) return undefined
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }

        let current = this.head
        let newTail = current

        while(current.next){
            newTail = current
            current = current.next
        }

        newTail.next = null
        this.tail = newTail
        this.length--
        return current
    }

    push(value: T): SinglyLinkedList<T> {
        const node = new NodeClass(value);
        if(!this.head){
            this.head = node;
            this.tail = this.head
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++

        return this
    }

    shift(): NodeClass<T> {
        if(!this.head) return undefined
        const temp = this.head
        this.head = temp.next;
        this.length--

        if(this.length === 0){
            this.tail = null
        }
        return temp;
    }

    unshift(value: T): SinglyLinkedList<T> {
        const newNode = new NodeClass(value)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index: number): NodeClass<T> {
        if(index < 0 || index >= this.length) return undefined

        let temp = this.head;
        let count = 0

        while(count !== index){
            count++
            temp = temp.next
        }

        return temp
    }
    
    set(index: number, value: T): boolean {
        let node = this.get(index)

        if(!node) return false

        node.value = value
        return true
    }

    insert(index: number, value: T): boolean {
        if(index < 0 || index > this.length) return false

        if(index === this.length) {
            this.push(value)
            return true
        }
        
        if(index === 0) {
            this.unshift(value)
            return true
        }

        let node = this.get(index-1)
        let newNode = new NodeClass(value)
        newNode.next = node.next
        node.next = newNode

        this.length++
        return true
    }

    remove(index: number): T {
        if(index < 0 || index > this.length) return undefined

        if(index === this.length-1) return this.pop().value

        if(index === 0) return this.shift().value

        let prev = this.get(index-1)
        let temp = prev.next
        prev.next = temp.next
        this.length--
        return temp.value
    }

    reverse(): SinglyLinkedList<T> {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let prev = null
        let next

        for(let i = 0; i < this.length; i++){
             next = node.next
             node.next = prev
             prev = node
             node = next
        }

        return this
    }

    print(): void {
        let arr = []
        let current = this.head
        while(current){
            arr.push(current)
            current = current.next
        }
        console.log(arr)
    }

    size(): number {
        return this.length
    }
}

const list = new SinglyLinkedList<number>()
list.push(2)
list.push(4)
list.push(3)
list.push(12)
list.pop()
list.unshift(5)
list.push(12)
list.shift()
list.get(0)
list.set(-1, 0)
list.set(1, 10)
list.insert(2,30)
// 2 -> 10 -> 30 -> 3 -> 12
list.print()
list.reverse()
list.print()


