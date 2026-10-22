class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack =[]

        for num in asteroids:
            
            if len(stack)>0:
                # same direction 
                if (stack[-1]<0 and num<0) or (stack[-1]>=0 and num>=0):
                    stack.append(num)
                else:

                    col = stack[-1] + num
                    if col == 0:
                        stack.pop()
                    else :
                        if stack[-1] < num:
                            stack.pop()
                            stack.append(num)
    
            else:
                stack.append(num)

        return stack