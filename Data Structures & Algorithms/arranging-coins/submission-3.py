class Solution:
    def arrangeCoins(self, n: int) -> int:
        i=0
        j=n
        ans = 0

        while i<=j:
            m = int((j+1)/2)
            k = (m*(m+1))/2

            if k == n:
                return m
            elif k>n:
                j = m-1
            else:
                ans = m
                i = m+1
        
        return i-1
