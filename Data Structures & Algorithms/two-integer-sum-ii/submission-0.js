class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left=0
        let right=numbers.length-1
        for(var i=0;i<numbers.length;i++){
            if(numbers[left]+numbers[right]==target){
                return [left+1,right+1]
            }
            else if(numbers[left]+numbers[right]>target){
                right=right-1
            }
            else{
                left=left+1
            }
        }
    }
}
