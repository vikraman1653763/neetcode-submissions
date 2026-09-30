class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temp) {
        let stack = [0];
        let res = [];
        for (let i = 1; i < temp.length; i++) {
            while (stack.length > 0 && temp[i] > temp[stack[stack.length - 1]]) {

            let days = i - stack[stack.length - 1];
            res[stack[stack.length - 1]] = days;
            stack.pop();
            }
            stack.push(i)
        }
        
        while(stack.length>0){
            res[stack[stack.length -1]] = 0
            stack.pop()
        }
        return res
    }
}
