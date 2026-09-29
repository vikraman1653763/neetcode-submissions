class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack =[]
        let op ={
            '*':(a,b)=>a*b,
            '+':(a,b)=>a+b,
            '-':(a,b)=>a-b,
            '/':(a,b)=>Math.floor(a/b)
        }
        for(let char of tokens){
            if(op[char]){
                let right = stack.pop()
                let left = stack.pop()
               let res = op[char](left,right)
                stack.push(res)
            }else{
                stack.push(Number(char))
            }
        }
        return stack[0]
    }
}
