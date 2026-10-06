class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        l=0
        r=0
        while r<len(nums):
            if nums[r] == 0:
                [nums[l],nums[r]] = [nums[r],nums[l]]
                l=l+1
            r=r+1
        
        r=l
        while r<len(nums):
            if nums[r] ==1:
                [nums[l],nums[r]] = [nums[r],nums[l]]
                l=l+1
            r=r+1
        return nums