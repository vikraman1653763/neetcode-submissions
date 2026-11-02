class PrefixTree {
    constructor() {
        this.object = []
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        this.object.push(word)
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.object.includes(word)
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let arr = this.object
        for(let i=0;i<arr.length;i++){
        let cand = arr[i]
        let j =0
        let res = true
        while(j<prefix.length){
            if((cand[j] !== prefix[j])){
                res = false
            }
            j++
        }
        if(res){
            return true
        }
        }
    }
}
