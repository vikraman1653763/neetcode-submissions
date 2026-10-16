class Solution:
    def search(self, nums: List[int], target: int) -> int:
        def finMin(nums):
            left = 0
            right = len(nums)-1

            while left<right:
                mid = int((left+right)/2)

                if nums[mid]>nums[right]:
                    left = mid+1
                else:
                    right = mid
            
            return right
        
        mins = finMin(nums)
        rotated = nums[mins:] + nums[:mins]
        
        l = 0
        r = len(rotated)-1

        while l<r:
            m = int((l+r)/2)

            if rotated[m]<target:
                l = m+1
            else:
                r=m
        
        out = (l+mins)% len(nums)

        if nums[out] != target:
            return -1
        else:
            return out
        