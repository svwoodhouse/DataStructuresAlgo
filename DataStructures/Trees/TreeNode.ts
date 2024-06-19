export default class TreeNode {
    value: number;
    right: TreeNode;
    left: TreeNode;

    constructor(value: number){
        this.value = value
        this.right = null
        this.left = null
    }
}