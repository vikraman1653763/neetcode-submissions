class Solution:
    def trap(self, height: List[int]) -> int:
        l= 0
        r= len(height)-1
        
        leftmax= 0
        rightmax= 0

        lefttrap = 0
        righttrap =0
        
        while l<r:
            if height[l]<=height[r]:
                if height[l]>=leftmax:
                    leftmax = height[l]
                else:
                     lefttrap = lefttrap+(leftmax-height[l])
                l=l+1
            else:
                if height[r]>=rightmax:
                    rightmax = height[r]
                else:
                    righttrap = righttrap+(rightMax-height[r])
                r=r-1
        return righttrap+lefttrap