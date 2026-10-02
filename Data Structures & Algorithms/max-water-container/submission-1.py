class Solution:
    def maxArea(self, heights: List[int]) -> int:
        res =0
        left =0
        right = len(heights)-1
        while left<right:
            value = (right - left) * min(heights[left],heights[right])
            res = max(res,value)
            if min(heights[left],heights[right]) == heights[left]:
                left+=1
            else:
                right-=1
        return res