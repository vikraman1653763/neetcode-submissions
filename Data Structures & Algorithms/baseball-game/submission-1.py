class Solution:
    def calPoints(self, operations: List[str]) -> int:
        stack =[]
        for c in operations:
            if c == '+':
                sec = int(stack.pop())
                fir = int(stack.pop())
                thi = fir+sec
                stack.append(fir)
                stack.append(sec) 
                stack.append(thi) 
            
            elif c == 'D':
                score = int(stack.pop())
                res = score + score
                stack.append(score)
                stack.append(res)
             
            elif c == 'C':
                stack.pop()

            else:
                stack.append(c)
        
        ans = 0

        for sc in stack:
            ans = ans+int(sc)
        print(stack)
        return ans