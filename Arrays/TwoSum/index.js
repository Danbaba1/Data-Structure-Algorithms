function twoSum(nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++){
        let num1 = target - nums[i]
        if (map.has(num1)){
            return [map.get(num1), i]
        }
        map.set(nums[i], i);
    }
    return []
};

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Expected: [1, 2]
console.log(twoSum([3, 3], 6));         // Expected: [0, 1]
