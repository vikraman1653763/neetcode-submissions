class Solution:
    def mySqrt(self, x: int) -> int:
        
        l = 0
        r = x

        while l<=r:
            mid = (l+r)//2
            sq = mid*mid

            if sq == x:
                return mid
            elif sq>x:
                r = mid-1
            else:
                l = mid+1
        return r