class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
          let stack = [];

    for (let c of operations) {
        if (c === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } 
        else if (c === 'D') {
            stack.push(stack[stack.length - 1] * 2);
        } 
        else if (c === 'C') {
            stack.pop();
        } 
        else {
            stack.push(Number(c));
        }
    }

    return stack.reduce((sum, score) => sum + score, 0);
    }
}
