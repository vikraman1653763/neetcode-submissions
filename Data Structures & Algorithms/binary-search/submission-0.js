class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        const bi = (arr,left,right)=>{
            if (left >= right) {
                return -1
            }

            const mid = Math.floor((right + left)/2)
            if(arr[mid] === target){
                return mid
            }else if(arr[mid]> target){
                return bi(nums,left,mid)
            }else{
                return bi(nums,mid+1,right)
            }
        }
        return bi(nums,0,nums.length)
    }
}
