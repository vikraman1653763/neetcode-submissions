class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        maxy = 0
        stack =[]
        seen = set()

        for char in s:
            while char in seen:
                removed = stack.pop(0)
                seen.remove(removed)
            
            stack.append(char)
            seen.add(char)
            maxy = max(maxy,len(stack))
        return maxy