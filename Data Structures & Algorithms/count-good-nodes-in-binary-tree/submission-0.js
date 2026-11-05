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
     * @return {number}
     */
    goodNodes(root) {
         let count = 0
         let maxsofar = root.val
       const dfs=(node,maxsofar)=>{

        if(node === null){
            return 
        }
        if(node.val>=maxsofar){
            count++
        }
        const newMax = Math.max(maxsofar, node.val);
        dfs(node.right,newMax)
        dfs(node.left,newMax)

       }
    dfs(root,maxsofar)
    return count
    }
}
