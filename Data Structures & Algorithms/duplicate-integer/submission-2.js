class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj={}
        for(var i=0;i<nums.length;i++){
            let count = obj[`${nums[i]}`] || 0
            if(count>0){
                return true
            }
            obj[`${nums[i]}`]=count+1
        }
        return false
    }
}
