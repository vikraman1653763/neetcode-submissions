class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        i=1
        j = num

        while(i<=j):

            mid = (j+i)//2

            if mid*mid == num:
                return True

            elif mid*mid>num:
                j=mid-1
            else:
                i= mid+1
        
        return False
