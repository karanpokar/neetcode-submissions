class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj={}
        for(var i=0;i<nums.length;i++){
            let number=nums[i]
            let count = obj[`${number}`] || 0
            if(count>0){
                return true
            }
            obj[`${number}`]=count+1
        }
        return false
    }
}
