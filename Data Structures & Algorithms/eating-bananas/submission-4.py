class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l = 1
        r = max(piles)
        
        while l<=r:
            mid = int((l+r)/2)
            hours = 0

            for j in range(len(piles)):
                speed = piles[j]/mid
                if speed == int(speed):
                    hours += int(speed)
                else:
                    hours += int(speed) + 1
                
            if hours<=h:
                r =mid-1
            else:
                l=mid+1
        return l
