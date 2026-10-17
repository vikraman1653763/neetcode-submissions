class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        n = len(nums1) + len(nums2)

        a = nums1
        b = nums2

        # Always binary search the shorter array
        if len(nums1) > len(nums2):
            a = nums2
            b = nums1

        left_part = (n + 1) // 2

        low = 0
        high = len(a)

        while low <= high:
            i = (low + high) // 2
            j = left_part - i

            # Boundary values around both partitions
            left_a = a[i - 1] if i > 0 else float("-inf")
            right_a = a[i] if i < len(a) else float("inf")

            left_b = b[j - 1] if j > 0 else float("-inf")
            right_b = b[j] if j < len(b) else float("inf")

            # Check whether the partition is valid
            if left_a <= right_b and left_b <= right_a:

                # Odd total: largest value on the left
                if n % 2 != 0:
                    return float(max(left_a, left_b))

                # Even total: average of the two middle values
                return (
                    max(left_a, left_b) +
                    min(right_a, right_b)
                ) / 2

            # Too many elements from a on the left
            elif left_a > right_b:
                high = i - 1

            # Too few elements from a on the left
            else:
                low = i + 1

        return 0.0