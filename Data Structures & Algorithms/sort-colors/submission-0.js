class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let l = 0;
        let r = 1;
        while (l < r && r < nums.length) {
            if (nums[r] === 0) {
                [nums[l], nums[r]] = [nums[r], nums[l]];
                l++;
            }
            r++;
            console.log(l, r);
        }
        r = l;

        while (nums && r < nums.length) {
            if (nums[r] === 1) {
                [nums[l], nums[r]] = [nums[r], nums[l]];
                l++
            }
            r++
        }
        return nums
    }
}
