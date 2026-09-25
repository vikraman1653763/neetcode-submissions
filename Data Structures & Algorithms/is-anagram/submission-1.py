class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        len(s) != len(t)
        seen ={}
        for char in s:
            seen[char] = seen.get(char,0)+1
        for char in t:
            if char not in seen or seen.get(char) == 0 :
                return False
            seen[char] = seen.get(char)-1
        return True