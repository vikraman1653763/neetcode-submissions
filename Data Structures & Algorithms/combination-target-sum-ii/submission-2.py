class Solution:
    def combinationSum2(self, nums: List[int], target: int) -> List[List[int]]:
        res = []
        nums.sort()

        def bt(start, remaining, path):
            if remaining == 0:
                res.append(path.copy())
                return

            for i in range(start, len(nums)):

                if i > start and nums[i] == nums[i - 1]:
                    continue

                if nums[i] > remaining:
                    break

                path.append(nums[i])
                bt(i + 1, remaining - nums[i], path)
                path.pop()

        bt(0, target, [])
        return res