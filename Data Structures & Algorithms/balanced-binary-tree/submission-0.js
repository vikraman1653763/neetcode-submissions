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
     * @return {boolean}
     */
    isBalanced(root) {
        if(root === null){
            return true
        }
        const height =(node)=>{
            if(node === null){
                return 0
            }
            let left = height(node.left)
            let right = height(node.right)
            
            return 1+ Math.max(left,right)
        }
        
        return Math.abs(height(root.left)-height(root.right))<=1 
    }
}
