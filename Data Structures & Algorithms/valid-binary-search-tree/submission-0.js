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
    isValidBST(root) {

        const dfs =(node)=>{
            if(!node) return 0

            let left = dfs(node.left) 
            let right = dfs(node.right) 
            if(left === -1 || right === -1){
                return -1
            }
            if( (left ===0 && right === 0 ) || (left<node.val && right> node.val) ){
                return node.val
            }else{
                return -1
            }
        }
        console.log(dfs(root))
        return dfs(root) !== -1
    }
}
