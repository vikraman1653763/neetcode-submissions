/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    preorderTraversal(root) {
        let res =[]
        const pre =(n)=>{
            if(n === null){
                return
            }
            res.push(n.val)
            pre(n.left)
            pre(n.right)
        }
        pre(root)
        return res
    }
}
