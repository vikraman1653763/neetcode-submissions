class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        
        res = 0
        i=0
        j=0
        temp=0

        for j in range(len(arr)):
            temp+=arr[j]

            if j-i+1 == k :
                if (temp/k)>=threshold:
                    res+=1
                
                temp-=arr[i]
                i+=1
            
        return res