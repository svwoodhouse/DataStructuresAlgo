import TreeNode from './TreeNode'

class Tree {
    root: TreeNode | null

    constructor(){
        this.root = null
    }
}

const tree = new Tree()
tree.root = new TreeNode(10)
tree.root.left = new TreeNode(15)
tree.root.right = new TreeNode(7)
tree.root.left.right = new TreeNode(9)