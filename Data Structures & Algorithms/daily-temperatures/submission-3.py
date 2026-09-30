class Solution:
    def dailyTemperatures(self, temp: List[int]) -> List[int]:
        stack =[]
        res = [0] * len(temp)
        for i in range(len(temp)):
            while stack and temp[i]> temp[stack[-1]]:
                index = stack.pop()
                res[index] = i - index
            stack.append(i)
        while len(stack)>0:
            res[stack[len(stack)-1]] = 0
            stack.pop()
        return res