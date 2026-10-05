class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        freq ={}
        res =0
        l=0
        for r in range(len(s)):
            freq[s[r]] = freq.get(s[r],0)+1
            win = r - l+1
            maxy = max(freq.values())
            if win - maxy <= k:
                res = max(win,res)
            else:
                freq[s[l]] = freq.get(s[l])-1
                if freq[s[l]] == 0:
                    del freq[s[l]] 
                l = l+1
        return res