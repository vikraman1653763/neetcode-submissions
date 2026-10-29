# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        
        def isEq(p,q):

            if p == None and q == None:
                return 0
            
            if (p != None and q == None) or (q != None and p == None):
                return -1
            
            if p.val != q.val:
                return -1
            
            left = isEq(p.left,q.left)
            right = isEq(p.right,q.right)
            
            if(left == -1 or right == -1):
                return -1
            
            return 0
        
        return isEq(p,q) !=-1
