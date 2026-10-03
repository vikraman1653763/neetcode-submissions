class Solution:
    def search(self, nums: List[int], target: int) -> int:
        
        def bi(arr,left,right):

            if left>=right:
                return -1
            
            mid = int((right+left)/2)

            if arr[mid] == target:
                return mid
            elif arr[mid] > target:
                return bi(arr,left,mid)
            else:
                return bi(arr,mid+1,right)
        return bi(nums,0,len(nums))