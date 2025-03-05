function containsDuplicate(nums) {
    const map = new Map()
    for ( let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return true;
        } else {
            map.set(nums[i], i)
        }
    }
    return false;
};

// Test cases
console.log(containsDuplicate([1, 2, 3, 1])); // Expected: true
console.log(containsDuplicate([1, 2, 3, 4])); // Expected: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Expected: true
