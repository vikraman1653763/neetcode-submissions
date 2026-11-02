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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const search = (node) => {
            if (node === null) {
                return false;
            }
            if (node.val === subRoot.val) {
                let isTrue = check(node, subRoot);
                if (isTrue) {
                    return true;
                }
            }
            return search(node.left) || search(node.right);
        };

        const check = (node, sub) => {
            if (subRoot === null) return true;
            if (node === null && sub === null) {
                return true;
            }
            if (
                (node === null && sub !== null) ||
                (node !== null && sub === null) ||
                node.val !== sub.val
            ) {
                return false;
            }
            return check(node.left, sub.left) && check(node.right, sub.right);
        };
        return search(root);
    }
}
