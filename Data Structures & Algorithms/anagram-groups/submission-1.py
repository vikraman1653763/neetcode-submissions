class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        if len(strs) <=1:
            return [strs]
        map ={}
        for str in strs:
            ordered = "".join(sorted(str))
            if ordered in map:
                map[ordered].append(str)
            else:
                map[ordered] = [str]
        res =[]
        for val in map.values():
            res.append(val)
        return res