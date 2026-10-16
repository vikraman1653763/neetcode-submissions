class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    search(nums, target) {
        if(nums.length === 1){
            if(nums[0] === target){
                return 0
            }else{
                return -1
            }
        }
        const findMin = (nums) => {
            let left = 0;
            let right = nums.length - 1;

            while (left < right) {
                let mid = Math.floor((right + left) / 2);

                if (nums[mid] > nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            return right;
        };

        let min = findMin(nums);
        
        if (nums[0] <= target && target <= nums[min-1]) {
            let left = 0;
            let right = min ;

            while (left <= right) {
                let mid = Math.floor((left + right) / 2);

                if (nums[mid] === target) {
                    return mid;
                } else if (nums[mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            return -1;
        } else if (nums[min] <= target && target <= nums[nums.length - 1]) {
            let left = min;
            let right = nums.length - 1;

            while (left <= right) {
                let mid = Math.floor((left + right) / 2);

                if (nums[mid] === target) {
                    return mid;
                } else if (nums[mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            return -1;
        } else {
            return -1;
        }
    }
}
