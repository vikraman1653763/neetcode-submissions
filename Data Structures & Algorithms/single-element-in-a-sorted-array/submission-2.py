class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        l = 0
        r = len(nums)-1

        while l<r:
            m = int((l+r)/2)

            if (
    (m == 0 or nums[m] != nums[m - 1]) and
    (m == len(nums) - 1 or nums[m] != nums[m + 1])
):
                return nums[m]
            

            if m%2 == 0:
                if nums[m] == nums[m+1]:
                    l= m+2
                else:
                    r = m
                
            else:
                if nums[m] == nums[m-1]:
                    l = m+1
                else:
                    r = m
            
        return nums[l];

