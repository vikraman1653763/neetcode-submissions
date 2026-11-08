class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        sum = 0

        def bt(index,xor):
            nonlocal sum
            if index == len(nums):
                sum+=xor
                return
            bt(index+1,xor^nums[index])            
            bt(index+1,xor)
        
        bt(0,0)
        return sum