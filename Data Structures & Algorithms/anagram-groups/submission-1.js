class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let finalArr=[]
        let stringObj={}
        if(strs==""){
            return [[""]]
        }
        for(var i=0;i<strs.length;i++){
            let string=strs[i]
            let sorted=strs[i].split('').sort().join('')
            let arr=stringObj[`${sorted}`] || []
            let arrPush=[...arr,string]
            stringObj[`${sorted}`]=arrPush
        }
        return Object.values(stringObj)
    }
}
