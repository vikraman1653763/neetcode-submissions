class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let n = nums1.length + nums2.length;

        let a = nums1;
        let b = nums2;

        // Always binary search the shorter array
        if (nums1.length > nums2.length) {
            a = nums2;
            b = nums1;
        }

        let leftPart = Math.floor((n + 1) / 2);

        let low = 0;
        let high = a.length;

        while (low <= high) {
            let i = Math.floor((low + high) / 2);
            let j = leftPart - i;

            // Boundary values around both partitions
            let leftA = i > 0 ? a[i - 1] : -Infinity;
            let rightA = i < a.length ? a[i] : Infinity;

            let leftB = j > 0 ? b[j - 1] : -Infinity;
            let rightB = j < b.length ? b[j] : Infinity;

            // Check whether the partition is valid
            if (leftA <= rightB && leftB <= rightA) {
                // Odd total: largest value on the left
                if (n % 2 !== 0) {
                    return Math.max(leftA, leftB);
                }

                // Even total: average of middle two values
                return (
                    Math.max(leftA, leftB) +
                    Math.min(rightA, rightB)
                ) / 2;
            }

            // Too many elements from a on the left
            if (leftA > rightB) {
                high = i - 1;
            } else {
                // Too few elements from a on the left
                low = i + 1;
            }
        }

        return 0; // Fallback for invalid input
    }
}