class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let sorted = []
        let i =0
        let j =0
        while(i<nums1.length &&j<nums2.length){
            if(nums1[i]<nums2[j]){
                sorted.push(nums1[i])
                i++
            }else{
                sorted.push(nums2[j])
                j++
            }
        }
        while(i<nums1.length){
            sorted.push(nums1[i])
            i++
        }
        
        while(j<nums2.length){
            sorted.push(nums2[j])
            j++
        }
       
       let n = sorted.length
       let mid = Math.floor(sorted.length/2)
        console.log(sorted,mid, sorted[mid])
       if(n%2 !==0){
            return sorted[mid] 
       }else{
        return (sorted[mid] +sorted[mid-1])/2
       }
    }
}
