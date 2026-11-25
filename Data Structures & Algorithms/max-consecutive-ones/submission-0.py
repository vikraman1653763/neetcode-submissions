class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        res = 0
        count = 0
        i=0
        started = False
        while i<len(nums):
            if nums[i] == 1:
                if started:
                    count+=1
                else:
                    count=1
                    started = True
            else:
                if started:
                    res = max(res,count)
                    started = False
                count = 0
            i+=1
        res = max(res,count)
        return res