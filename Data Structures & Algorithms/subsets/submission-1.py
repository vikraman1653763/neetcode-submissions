class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res =[]

        def bt(idx,sub):
            if idx == len(nums):
                res.append([*sub])
                return
            
            bt(idx+1,[*sub,nums[idx]])            
            bt(idx+1,sub)
        
        bt(0,[])
        return res