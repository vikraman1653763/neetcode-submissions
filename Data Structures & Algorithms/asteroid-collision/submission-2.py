class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack =[]

        for num in asteroids:
            alive = True
            if len(stack)>0:
                # same direction 
                while stack and stack[-1] > 0 and num < 0:
                    if stack[-1] == -1*num:
                        stack.pop()
                        alive =False
                        break
                    else:
                        if stack[-1]< -1*num:
                            stack.pop()
                        else:
                            alive = False
                            break

            if alive:
                stack.append(num)

        return stack