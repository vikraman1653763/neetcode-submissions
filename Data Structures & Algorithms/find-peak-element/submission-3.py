class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        i = 0
        j = len(nums)-1

        while i<j:
            m = int((i+j)/2)

         
            if nums[m]<nums[m+1]:
                i = m+1
            else:
                j=m
            
        
        return i