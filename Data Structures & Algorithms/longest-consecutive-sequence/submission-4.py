class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums)<=1:
            return len(nums)
        nums.sort()
        maxi = nums[0]
        seq=1
        res =1
        for i in range(1,len(nums)):
            if nums[i] == maxi+1:
                seq+=1
                maxi = nums[i]
            elif nums[i] == maxi:
                continue
            else:
                maxi = nums[i]
                seq = 1
            
            res = max(seq,res)
        return res