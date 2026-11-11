class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let res =[]

        const bt=(start,path)=>{
           
            if(path.length === k){
                res.push([...path])
                return
            }
           
           for(let i = start;i<=n;i++){
            

            path.push(i)
            bt(i+1,path)
            path.pop()
           }
        }
        bt(1,[])
        return res
    }
}
