# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def goodNodes(self, root: TreeNode) -> int:
       
        count = 0

        def dfs(node,maxsofar):
            nonlocal count 
            if node == None: return 
            if node.val >= maxsofar: 
                count +=1
            
            newMax = max(maxsofar,node.val)

            dfs(node.left,newMax)
            dfs(node.right,newMax)
        
        
        dfs(root,root.val)
        return count