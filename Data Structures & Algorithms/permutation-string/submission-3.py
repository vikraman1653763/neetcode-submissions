class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        s1_freq ={}
        for char in s1:
            s1_freq[char] = s1_freq.get(char,0) +1
        w_freq ={}
        left =0

        for right in range(len(s2)):
            w_freq[s2[right]] = w_freq.get(s2[right],0) +1

            if right-left+1 == len(s1):
                match = True
                for k in s1_freq:
                    if k not in w_freq or s1_freq[k] != w_freq[k]:
                        match = False
                
                if match:
                    return True
                
                w_freq[s2[left]] = w_freq.get(s2[left]) - 1
                left= left+1

        return False