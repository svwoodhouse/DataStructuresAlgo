var Node = require('../../DataStructures/Trees/BinaryTree')

// Create the nodes
const root = new Node('A')
const NodeB = new Node('B')
const NodeC = new Node('C')
const NodeD = new Node('D')
const NodeE = new Node('E')
const NodeF = new Node('F')

// Creates the Binary Tree
//      A
//     / \
//    B   C
//   / \   \
//  D   E   F

root.left = NodeB
root.right = NodeC
NodeB.left = NodeD
NodeB.right = NodeE
NodeC.right = NodeF
// Depth First Values
// Write a function, depthFirstValues, that tales in the root of a binary tree. 
// The function should return an array containing all values of the tree in depth-first order.

// Iterative Solution
const depthFirstValues = (root) => {
    const results =[]
    const stack = [root];
    while(stack.length > 0) {
        const current = stack.pop();
        
        if(current.right){
            stack.push(current.right)
        }

        if(current.left){
            stack.push(current.left)
        }

        results.push(current.value)
    }
    return results
}

// Recursive Solution
const depthFirstValuesRecursive = (root) => {
    if(root == null)
        return []

    const leftNodeValues = depthFirstValuesRecursive(root.left)
    const rightNodeValues = depthFirstValuesRecursive(root.right)

    return [root.val, ...leftNodeValues, ...rightNodeValues]
}

console.log(depthFirstValues(root))
console.log(depthFirstValuesRecursive(root))