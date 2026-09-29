class Solution:
    def isValid(self, s: str) -> bool:
        stack =[]
        bracket={
            "}": "{",
            "]": "[",
            ")": "("
        }
        closing = [")", "}", "]"]
        for char in s:
            if char in closing:
                if not stack or stack[-1] != bracket[char]:
                    return False
                else:
                    stack.pop()
            else:
                stack.append(char)
        if len(stack) >0:
            return False
        else:
            return True