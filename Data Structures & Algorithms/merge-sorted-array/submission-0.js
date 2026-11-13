class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        for(let i = m+n-1;i>=n;i--){
            nums1[i]=nums1[i-n]
        }
        
        for(let i =0;i<n;i++){
            nums1[i]=nums2[i]
        }
    }
}
