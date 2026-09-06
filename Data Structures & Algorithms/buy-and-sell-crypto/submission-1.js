class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left=0
        let right=1
        let sum=0;

        while(left<right && right<prices.length){
            if(prices[left]>=prices[right]){
                left=left+1
                right=left+1
            }
            else if(prices[left]<prices[right]){
                let profit=prices[right]-prices[left]
                if(profit>sum){
                    sum=profit
                }
                right++
            }else{
                left++
            }
        }

        return sum
    }
}
