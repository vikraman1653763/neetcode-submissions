class Solution:
    def decodeString(self, s: str) -> str:
        stack =[]
        res =''

        for c in s:
            if c == ']':
                temp =''

                while len(stack)>0:

                    ch = stack.pop()

                    if ch == '[':
                        break
                    
                    temp = ch+temp

                count = ''
                while len(stack)>0:
                    
                    if stack[-1].isnumeric():
                        count = stack.pop()+count
                    else:
                        break
                
                i=0
                while i<int(count):
                    stack.append(temp)
                    i+=1
                
            else:
                stack.append(c)
        
        for ch in stack:
            res+=ch
        return res