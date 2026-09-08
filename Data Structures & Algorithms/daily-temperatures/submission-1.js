class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
       let result = new Array(temperatures.length).fill(0)
        let stack = []
        
        const checkTop=(stack)=>{
            return stack[stack.length-1]
        }
        for(var i=0;i<temperatures.length;i++){
            if(i==0){
                stack.push(i)
            }
            while(temperatures[checkTop(stack)]<temperatures[i] && stack.length>0){
                result[checkTop(stack)]=i-checkTop(stack);
                stack.pop()
            }
            stack.push(i)
        }
        //console.log(result)
         return result
    }
   
}
