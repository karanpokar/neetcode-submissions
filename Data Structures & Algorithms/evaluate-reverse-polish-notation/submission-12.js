class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        //let output=0
        const result=(a,b,expression)=>{
            //console.log('exp',a,b,expression)
            if(expression=='+'){
                return Number(a)+Number(b)
            }
            if(expression=='-'){
                return Number(a)-Number(b)
            }
            if(expression=='*'){
                return Number(a)*Number(b)
            }
            if(expression=='/'){
                return Math.trunc(Number(a) / Number(b))
            }
        }
        const checkTop=(stack)=>{
            return stack[stack.length-1]
        }
        const operators=['+','-','*','/']
        let stack=[]
        for(var i=0;i<tokens.length;i++){
            // if(i==0){
            //     stack.push(tokens[i])
            // }
            if(operators.includes(tokens[i])){
                let element1=stack.pop()
                let element2=stack.pop()
                let sum=result(element2,element1,tokens[i])
                if(sum!==undefined){
                    stack.push(sum);
                }
               
            }
            else{
                stack.push(tokens[i])
            }
        }
        return stack.pop()
    }
}
