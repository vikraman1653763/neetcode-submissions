class Solution {
    deleteNode(root, key) {

        const findMin = (node) => {
            while (node.left !== null) {
                node = node.left;
            }
            return node;
        };

        const deleteNode = (node, key) => {

            if (node === null) return null;

            if (key < node.val) {
                node.left = deleteNode(node.left, key);
            }
            else if (key > node.val) {
                node.right = deleteNode(node.right, key);
            }
            else {
                // Case 1: No left child
                if (node.left === null) {
                    return node.right;
                }

                // Case 2: No right child
                if (node.right === null) {
                    return node.left;
                }

                // Case 3: Both children exist
                const successor = findMin(node.right);

                node.val = successor.val;

                node.right = deleteNode(node.right, successor.val);
            }

            return node;
        };

        return deleteNode(root, key);
    }
}