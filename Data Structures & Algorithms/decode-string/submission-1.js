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
                    let count = ''
                    while(stack.length>0){
                        
                        if(+stack[stack.length-1]>=0){
                            count = stack.pop()+count
                        }else{
                            break
                        }
                    }
                    console.log(count)
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
