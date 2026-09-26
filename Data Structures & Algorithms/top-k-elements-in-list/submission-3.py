class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = {}
        for num in nums:
            freq[num]= freq.get(num,0)+1
        bucket =[[] for _ in range(len(nums)+1)]
        for ke,v in freq.items():
            bucket[v].append(ke)

        res =[]

        for i in range(len(bucket)-1,-1,-1):
            if(bucket[i] != []):
                for j in range(len(bucket[i])):
                    res.append(bucket[i][j])
                    if(len(res) == k):
                        return res
        return res