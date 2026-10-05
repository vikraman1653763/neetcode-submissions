class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(s)< len(t):
            return ''
        
        freq ={}
        res =''
        l = 0
        t_freq = {}
        for char in t:
            t_freq[char] = t_freq.get(char,0)+1
        
        for r in range(len(s)):
            freq[s[r]] = freq.get(s[r],0)+1
            match = True
            for k in t_freq.keys():
                if k not in freq or freq[k]< t_freq[k]:
                    match = False
                    break
            while match :
                window = s[l:r+1]
                if res =='' or len(window) < len(res):
                    res = window
                
                if s[l] in t_freq:
                    freq[s[l]] = freq.get(s[l]) -1
                    if freq[s[l]] < t_freq[s[l]]:
                        match = False
                l = l+1
        return res
