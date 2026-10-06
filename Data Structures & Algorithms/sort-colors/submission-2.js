class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const red = [];
        const white = [];
        const blue = [];


        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                red.push(nums[i]);
            }

            if (nums[i] === 1) {
                white.push(nums[i]);
            }

            if (nums[i] === 2) {
                blue.push(nums[i]);
            }
        }

        for (let i = 0; i < nums.length; i++) {

            for (let j = 0; j < red.length; j++) {
                nums[i] = red[j];
                i++
            }

            for (let j = 0; j < white.length; j++) {
                nums[i] = white[j];
                i++
            }
            for (let j = 0; j < blue.length; j++) {
                nums[i] = blue[j];
                i++
            }
        }
    }
}
