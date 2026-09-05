class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let objS={}
        let objT={}
        if(s.length!=t.length){
            return false
        }
        else{
        for(var i=0;i<s.length;i++){
            let string=s[i]
            let stringT=t[i];
            //console.log(string,stringT)
            let countT=objT[`${stringT}`] || 0
            let count=objS[`${string}`] || 0
            //console.log(count,countT)
            objS[`${string}`]=count +1
            objT[`${stringT}`]=countT +1
        }
        //console.log(objS,objT)
        for(var i=0;i<s.length;i++){
            let string=s[i]
            if(objS[`${string}`]!=objT[`${string}`]){
                return false
            }
        }
        return true
        }
    }
}
