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
    diameterOfBinaryTree(root) {
        let diameter = 0;

        function height(node) {
            if (node === null) return 0;

            let left = height(node.left);
            let right = height(node.right);

            diameter = Math.max(diameter, left + right);
            return 1 + Math.max(left, right);
        }

        height(root);
        return diameter;
    }
}
