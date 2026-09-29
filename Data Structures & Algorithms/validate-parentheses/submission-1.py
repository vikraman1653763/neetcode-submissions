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
                if stack[-1] == bracket[char]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(char)
        if len(stack) >0:
            return False
        else:
            return True