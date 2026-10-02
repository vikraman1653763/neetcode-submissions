class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0
        let left = 0
        let right = heights.length -1
        while(left<right){
            let width = right - left
            let minHeight = Math.min(heights[left],heights[right])
            let value = width * minHeight
            res = Math.max(res,value)
            if(minHeight === heights[left]){
                left++
            }else{
                right--
            }
        }
        return res
    }
}
