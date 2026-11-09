class Solution:
    def longestDiverseString(self, a: int, b: int, c: int) -> str:
        
        counts=[
            ['a',a],
            ['b',b],
            ['c',c]
        ]

        res = ''

        while True:
            counts.sort(key = lambda x:x[1],reverse =True)
            added = False

            for i in range (3):
                [ch,count] = counts[i]

                if count == 0 : continue

                n = len(res)

                if n>=2 and res[n-1] == ch and res[n-2] == ch :
                    continue
                
                res+=ch
                counts[i][1]-=1

                added = True
                break
            
            if not added: break
        
        return res