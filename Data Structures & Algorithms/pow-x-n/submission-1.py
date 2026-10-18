class Solution:
    def myPow(self, x: float, n: int) -> float:
        if x ==1:
            return x
        i = 0
        ans = 1
        negative = False
        if n<0:
            negative = True
            n = -1*n
        while i<n:
            ans=ans*x
            i=i+1
        
        if negative:
            return 1/ans
        return ans