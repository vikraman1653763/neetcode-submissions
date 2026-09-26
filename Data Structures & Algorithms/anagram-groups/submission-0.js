class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length<=1){
            return[strs]
        }
        let map = new Map()
        for(let str of strs){
            let ordered = str.split("").sort().join("")
            if(map.has(ordered)){
                map.get(ordered).push(str)
            }else{
            map.set(ordered,[str])
            }
        }
        console.log(map)
        let res =[]
        for(let val of map.values()){
            res.push(val)
        }
        return res
    }
}
