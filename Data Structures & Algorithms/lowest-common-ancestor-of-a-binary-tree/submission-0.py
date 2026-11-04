# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        def dfs(root):
            if root == None: return None

            if root == p or root == q: return root

            left = dfs(root.left)  
            right = dfs(root.right)

            if left != None and right != None:
                return root
        

            if left == None and right == None:
                return None
        
            if left != None and right == None:
                return left
        
            if left == None and right != None:
                return right
        
    
        return dfs(root)
        