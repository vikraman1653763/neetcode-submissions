# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def reverseOddLevels(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root :return None

        queue=[root]
        level =0

        while len(queue)>0:
            size = len(queue)
            currentLevel=[]

            for i in range(size):
                node = queue.pop(0)

                currentLevel.append(node)

                if node.left: queue.append(node.left)
                if node.right: queue.append(node.right)
            
            if level%2 !=0:
                left =0
                right = len(currentLevel)-1

                while(left<right):
                    [currentLevel[left].val,currentLevel[right].val] = [currentLevel[right].val,currentLevel[left].val]
                    left+=1
                    right-=1
            level+=1
        return root