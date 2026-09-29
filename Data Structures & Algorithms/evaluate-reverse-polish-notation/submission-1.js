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
            '/':(a,b)=>a/b
        }
        for(let char of tokens){
            if(op[char]){
               let res = op[char](stack[0],stack[1])
                stack=[]
               
                stack.push(res)
            }else{
                stack.push(Number(char))
            }
        }
        return stack[0]
    }
}
