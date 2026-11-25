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
     * @return {TreeNode}
     */
    reverseOddLevels(root) {
        if (!root) return null;

        let queue = [root];
        let level = 0;

        while (queue.length > 0) {
            let size = queue.length;
            let currentLevel = [];
            for (let i = 0; i < size; i++) {
                let node = queue.shift();
                currentLevel.push(node);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);               
            }
            if(level%2 !==0){
                let left = 0
                let right = currentLevel.length - 1

                while(left<right){
                    [currentLevel[left].val,currentLevel[right].val] = [currentLevel[right].val,currentLevel[left].val]
                    left++
                    right--
                }

            }
            level++;
        }
        return root;
    }
}
