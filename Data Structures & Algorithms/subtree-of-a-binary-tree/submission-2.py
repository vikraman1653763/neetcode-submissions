# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:   
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        if subRoot == None : return True
        if root == None : return False

        def check(node,sub):
            if node == None and sub == None : return True

            if node == None or sub == None : return False

            if node.val != sub.val : return False

            return check(node.left,sub.left) and check(node.right, sub.right)

        def search(node):
            if node == None : return False

            if check(node,subRoot): return True

            return search(node.left) or search(node.right)
        
        return search(root)