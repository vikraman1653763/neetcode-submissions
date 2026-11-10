class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        res =[]

        def bt(i,s,c):

            if i == len(nums) or s>=target:
                return
            
            if s+nums[i] == target:
                res.append(c+[nums[i]])
            
            bt(i,s+nums[i],c+[nums[i]])
            bt(i+1,s,c)
        
        bt(0,0,[])

        return res