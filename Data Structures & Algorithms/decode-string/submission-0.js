class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack =[]
        let res =''
        for(let c of s){
            if(c === ']'){
                let temp =''
               while(stack.length>0){
                let ch = stack.pop()

                if(ch === '['){
                    break
                }
                temp=ch+temp
               }
                    
                    let count = -1 +1 +stack.pop()
                    let i =0
                    while(i<count){
                    stack.push(temp)
                    i++
                    }
                
            }else{
                stack.push(c)
            }
                console.log(stack)
        }
        
        for(let ch of stack){
            res+=ch
        }
        return res
    }
}
