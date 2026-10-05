class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let k = s1.length;
        let sortedS1 = s1.split("").sort().join("");
        if (k > s2.length) {
            return false;
        }

        let candidate = "";
        for (let char of s2) {
            candidate+=char;
            if (candidate.length === k) {
                if (candidate.split("").sort().join("") === sortedS1) {
                    return true
                } else {
                    candidate = candidate.slice(1)
                }
            }

        }
        return false;
    }
}
