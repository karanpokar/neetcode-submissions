class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let Obj={}
        let arr=[]
            for(var i=0;i<nums.length;i++){
                let count=Obj[`${nums[i]}`] || 0
                Obj[`${nums[i]}`]= count + 1
            }
            let keys=Object.keys(Obj)
            keys.sort((a, b) => Obj[b] - Obj[a])

            return keys.slice(0, k)
        }
    
}
