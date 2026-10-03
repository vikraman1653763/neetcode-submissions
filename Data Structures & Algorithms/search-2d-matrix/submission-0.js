class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        const searchArray = (arr,left,right)=>{
            if (left > right) {
                return false;
            }
            let mid = Math.floor((right+left)/2)
            if(arr[mid] === target){
                return true
            }else if(arr[mid]>target){
                return searchArray(arr,left,mid-1)
            }else if(arr[mid]<target){
                return searchArray(arr,mid+1,right)
            }
            
        }

        const bi = (matrix, left, right) => {
            if (left > right) {
                return false;
            }
            let mid = Math.floor((right + left) / 2);
            let row = matrix[mid]
            if (row[0] <= target && row[row.length - 1] >= target) {
                return searchArray(row,0,row.length-1);
            } else if (row[0] > target) {
                return bi(matrix, left, mid-1);
            } else if(row[row.length - 1] < target){
                return bi(matrix, midN + 1, right);
            }else{
                return false
            }
        };
        return bi(matrix,0,matrix.length)
        
    }
}
