class Solution:
    def majorityElement(self, nums: list[int]) -> list[int]:
        cad1 =None        
        cad2 =None

        count1 =0
        count2 =0

        for n in nums:

            if cad1 == n:
                count1 +=1
            elif cad2 == n:
                count2 +=1
            elif count1 == 0:
                cad1 = n
                count1 =1
            elif count2 == 0:
                cad2=n
                count2=1
            else:
                count1 -=1
                count2 -=1
        
        count1=0
        count2=0

        for n in nums:

            if n == cad1:
                count1 +=1
            
            if n == cad2:
                count2 +=1
        
        th = int(len(nums)/3)
        res=[]

        if count1>th:
            res.append(cad1)

        if count2>th:
            res.append(cad2)

        return res