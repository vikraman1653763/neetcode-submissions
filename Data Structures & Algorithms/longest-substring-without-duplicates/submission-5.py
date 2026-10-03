class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        maxy = 0
        stack =[]
        for char in s:
            while char in stack:
                stack.pop(0)
            
            stack.append(char)
            maxy = max(maxy,len(stack))
        return maxy