class Solution:
    def isHappy(self, n: int) -> bool:
        seen = set()

        while n!=1:
            if n in seen:
                return False
            else:
                seen.add(n)
            
            num = n
            temp = 0
            while num>0:
                digit = num%10
                temp = temp+ (digit*digit)
                num = int(num/10)
            n=temp
        return True