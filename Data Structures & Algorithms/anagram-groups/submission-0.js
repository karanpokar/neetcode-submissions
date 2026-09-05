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
        let keys=Object.keys(stringObj)
        
        for(var j=0;j<keys.length;j++){
            let name=keys[j]
        
            let arr=stringObj[`${name}`]
          
            finalArr=[...finalArr,arr]
        }
        //console.log(finalArr)
        return finalArr
    }
}
