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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {

        const isEqual =(pnode,qnode)=>{
            if(pnode === null && qnode === null){
                return 0
            }
            if((pnode !== null && qnode === null) || (pnode === null && qnode !== null)){
                return -1
            }

            let left = isEqual(pnode.left,qnode.left)
            let right = isEqual(pnode.right,qnode.right)
            
            if((left === -1 || right === -1) || (left !== right) || pnode.val !== qnode.val ){
                return -1
            }
            return 0
        }

        return isEqual(p,q) !== -1
    }
}
