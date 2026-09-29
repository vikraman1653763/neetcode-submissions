class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let bracket = {
            "}": "{",
            "]": "[",
            ")": "(",
        };
        let closing = [")", "}", "]"];
        for (let char of s) {
            if (closing.includes(char)) {
                if (stack[stack.length - 1] === bracket[char]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }
        if (stack.length > 0) {
            return false;
        } else {
            return true;
        }
    }
}
