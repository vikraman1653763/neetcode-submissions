class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        
        def nearest(nums):
            i=0
            j=len(nums)-1

            while i<=j:
                m = int((i+j)/2)

                if arr[m] ==x:
                    return m
                elif arr[m]<x:
                    i=m+1
                else:
                    j=m-1
            return i
        
        near = nearest(arr)
        left = near-1
        right =near
        res=[]

        while len(res)<k:
            if left>=0 and right<len(arr):
                if abs(arr[left] - x) <= abs(arr[right] - x):
                    res.append(arr[left])
                    left-=1
                else:
                    res.append(arr[right])
                    right+=1
            elif left>=0:
                res.append(arr[left])
                left-=1
            else:
                res.append(arr[right])
                right+=1
        
        return sorted(res)

        