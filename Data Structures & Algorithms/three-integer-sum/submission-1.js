class Solution {

    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    threeSum(nums) {

        let result = [];
        let list = [...nums.sort((a, b) => a - b)];

        for (let i = 0; i < list.length - 2; i++) {

            let left = i + 1;
            let right = list.length - 1;

            // Skip duplicate values for i
            if (i > 0 && list[i] === list[i - 1]) {
                continue;
            }

            while (left < right) {

                let sum = list[i] + list[left] + list[right];

                if (sum === 0) {

                    result.push([
                        list[i],
                        list[left],
                        list[right]
                    ]);

                    left++;
                    right--;

                    // Skip duplicate left values
                    while (left < right && list[left] === list[left - 1]) {
                        left++;
                    }

                    // Skip duplicate right values
                    while (left < right && list[right] === list[right + 1]) {
                        right--;
                    }

                } else if (sum > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }

        return result;
    }
}