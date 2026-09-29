class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack =[]
        op ={
            '*':lambda a,b:a*b,
            '+':lambda a,b:a+b,
            '-':lambda a,b:a-b,
            '/':lambda a,b:int(a/b)
        }
        for char in tokens:
            if char in op:
                right = stack.pop()
                left = stack.pop()
                res = op[char](left,right)
                stack.append(res)
            else:
                stack.append(int(char))
        return stack[0]