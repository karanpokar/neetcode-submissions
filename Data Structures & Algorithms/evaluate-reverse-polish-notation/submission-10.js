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
            if(i==0){
                stack.push(tokens[i])
            }
            //console.log(stack)
            //while(stack.length>0 && operators.includes(tokens[i])){
            // while(operators.includes(checkTop(stack)) && stack.length>0){
            //     //console.log('before',stack)
            //     let operator=stack.pop()
            //     let element1=stack.pop()
            //     let element2=stack.pop()
            //     //console.log('after',stack)
            //     //console.log(operator,element1,element2)
            //     if(element1 && element2 && operator){
            //     let sum = result(element2,element1,operator)
            //     //console.log('sum',sum, element1,element2,operator)
            //     if(sum!==undefined){
            //         stack.push(sum)
            //     }
            //     }
            //     else{
            //         stack.push(operator)
            //         if (element1)
            //         stack.push(element1)
            //         if (element2)
            //         stack.push(element2)
            //     }
            // }
            // if(tokens[i]){
            //     stack.push(tokens[i])
            // }
            if(operators.includes(tokens[i])){
                let element1=stack.pop()
                let element2=stack.pop()
                //console.log(element1,element2,tokens[i])
                let sum=result(element2,element1,tokens[i])
                //console.log('sum',sum)
                if(sum!==undefined){
                    stack.push(sum);
                }
               
            }
            else{
                stack.push(tokens[i])
            }
           
        }
        //console.log('stack',stack)
        return stack.pop()
    }
}
