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
        const dfs = (node) => {
            if (!node) {
                return {
                    min: Infinity,
                    max: -Infinity,
                    isValid: true,
                };
            }

            let left = dfs(node.left)
            let right = dfs(node.right)

            
            if(left.isValid && right.isValid){
                let min = Math.min(left.min,node.val)
                let max = Math.max(right.max,node.val)
                if(left.max<node.val && node.val<right.min){
                return {min:min,max:max,isValid:true}
            }else{
                return {min:min,max:max,isValid:false}
            }
            }else{
                return {min:left.min,max:right.max,isValid:false}
            }
            
        };
        return dfs(root).isValid;
    }
}
