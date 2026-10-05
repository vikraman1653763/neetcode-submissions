class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        res =[]
        deque =[]

        l =0
        for r in range(len(nums)):
            while len(deque)>0 and nums[deque[len(deque)-1]] < nums[r]:
                deque.pop()
            deque.append(r)
            if r-l+1 == k:
                res.append(nums[deque[0]])

                if deque[0] == l:
                    deque.pop(0)
                l=l+1
        return res