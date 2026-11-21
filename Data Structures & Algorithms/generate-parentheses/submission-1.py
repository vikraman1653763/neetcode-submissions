class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res=[]

        def bt(s,o,c):
            if o ==n and c==n:
                res.append(s)
                return
            
            if o<n:
                bt(s+'(',o+1,c)
            
            if c<o and c<n:
                bt(s+')',o,c+1)
            
        bt('',0,0)
        return res