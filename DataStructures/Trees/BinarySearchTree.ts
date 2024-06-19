import TreeNode from "./TreeNode"

class BinarySearchTree {
    root: TreeNode

    constructor(){
        this.root = null
    }

    insert(value: number): BinarySearchTree {
        const newNode = new TreeNode(value)

        if(!this.root) {
            this.root = newNode
            return this
        }

        let current = this.root

        while(current){
            if(value > current.value){
                if(!current.right){
                    current.right = newNode
                    break
                }
                current = current.right
            }
            else {
                if(!current.left){
                    current.left = newNode
                    break
                }
                current = current.left
            }
        }
        return this
    }

    find(value: number): TreeNode {
        if(!this.root) return undefined

        let current = this.root
        while(current){
            if(current.value === value)
                return current
            
            if(value >= current.value) current = current.right
            else current = current.left
        }

        return undefined
    }

    breadthFirstTraversal(): number[] {
        if(!this.root) return undefined

        let data = []
        let queue = [this.root]
        let current: TreeNode

        while(queue.length){
            current = queue.shift()
            data.push(current.value)

            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
        }

        return data
    }

    dfsPreOrderTraversal(): number[] {
        if(!this.root) return undefined

        let data = []
        let stack = [this.root] 

        while(stack.length){
            const current = stack.pop()
            data.push(current.value)
            if(current.right) stack.push(current.right)
            if(current.left) stack.push(current.left)
        }

        return data
    }

    dfsPostOrderTraversal(): number[] {
        if(!this.root) return undefined

        const data = []

        function traverse(node: TreeNode): void {
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            
            data.push(node.value)
        }

        traverse(this.root)
        return data
    }

    dfsInOrderTraversal(): number[] {
        if(!this.root) return undefined

        const data = []

        function traverse(node: TreeNode): void {
            if(node.left) traverse(node.left)
            data.push(node.value)
            if(node.right) traverse(node.right)
            
        }

        traverse(this.root)
        return data
    }

}

const bst = new BinarySearchTree()
bst.insert(20)
bst.insert(10)
bst.insert(30)
bst.insert(9)
bst.insert(12)
bst.insert(27)
bst.insert(31)
bst.insert(8)

console.log(bst.breadthFirstTraversal())
console.log(bst.dfsPreOrderTraversal())
console.log(bst.dfsPostOrderTraversal())
console.log(bst.dfsInOrderTraversal())
