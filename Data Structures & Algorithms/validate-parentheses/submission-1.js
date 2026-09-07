//javascript
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let arr = [];

        const findInvert = (val) => {
            const brackets = {
                '[': ']',
                ']': '[',
                '(': ')',
                ')': '(',
                '{': '}',
                '}': '{'
            };

            return brackets[val];
        };

        const findTop = (arr) => {
            return arr[arr.length - 1];
        };

        for (let i = 0; i < s.length; i++) {
            const current = s[i];

            // Opening bracket → push it
            if (current === '(' || current === '[' || current === '{') {
                arr.push(current);
            }
            // Closing bracket → check the top
            else {
                let latest = findTop(arr);

                if (latest === findInvert(current)) {
                    arr.pop();
                } else {
                    return false;
                }
            }
        }

        return arr.length === 0;
    }
}

