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


// Iterative Solution
const inOrderTraversalRecursive = (root) => {
    if(root === null)
        return

    inOrderTraversalRecursive(root.left)
    console.log(root.value)
    inOrderTraversalRecursive(root.right)

}

console.log(inOrderTraversalRecursive(root))