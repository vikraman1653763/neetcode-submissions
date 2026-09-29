class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        zeros =0
        for num in nums:
            if num == 0:
                zeros+=1
        
        if zeros>1:
            res = [0]* len(nums)
            return res
        elif zeros == 1:
            pos = 0
            prod = 1

            for i in range(len(nums)):
                if nums[i] == 0:
                    pos = i
                else:
                    prod *=nums[i]
            
            res =[0] * len(nums)
            res[pos]= prod
            return res
        else:
            res =[]
            prod =1
            
            for num in nums:
                prod*=num

            for num in nums:
                res.append(int(prod/num))
            return res