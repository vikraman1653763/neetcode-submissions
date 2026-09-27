class Solution:

    def encode(self, strs: List[str]) -> str:
        res =''
        for s in strs:
            adder = str(len(s))+'#'
            res+=adder+s
        return res
      

    def decode(self, s: str) -> List[str]:
        res =[]
        word=''
        lens=0
        i=0
        while i<len(s):
            
            while s[i] >='0' and s[i] <='9':
                lens = lens*10+ int(s[i])
                i=i+1
                
            if s[i] == '#':
                i=i+1
                
                while lens>0:
                    word+=s[i]
                    lens = lens-1
                    i=i+1
                    
                res.append(word)
                word=''
        return res