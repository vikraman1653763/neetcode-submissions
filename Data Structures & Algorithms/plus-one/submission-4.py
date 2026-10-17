class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        carry =1
        for i in range(len(digits)-1,-1,-1):

             added = digits[i]+carry

             digits[i] = added%10
             carry = int(added/10)

             if carry == 0:
                break
        
        if carry>0:
            digits.append(0)

            for i in range (len(digits)-1,0,-1):
                digits[i]=digits[i-1]
            digits[0]=carry
        return digits