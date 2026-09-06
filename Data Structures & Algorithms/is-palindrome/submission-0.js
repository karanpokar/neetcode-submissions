class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let middle= Math.floor(cleaned.length/2)
        for(var i=0;i<=middle;i++){
            if(cleaned[i] !== cleaned[cleaned.length-i-1]){
                return false
            }
        }
        return true
    }
}
