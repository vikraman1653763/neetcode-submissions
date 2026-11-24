/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, left = null, right = null, next = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} root
     * @return {Node}
     */
    connect(root) {
        if (root === null) return null;
        let res = [];
        let queue = [root];

        while (queue.length > 0) {
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                let node = queue.shift();
                let next = i<size-1 ? queue[0]: null
                
                node.next = next
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
                
            }
        }
        return root;
    }
}
