function longestEqualOccurrences(nums, x, y) {
    // Map to store the first occurrence of each difference
    // Initialize with difference 0 at position -1 (before array starts)
    const diffPositions = new Map();
    diffPositions.set(0, -1);
    
    let maxLength = 0;
    let diff = 0;  // Tracks the difference between occurrences of x and y
    
    for (let i = 0; i < nums.length; i++) {
        // Update the difference counter
        if (nums[i] === x) {
            diff += 1;
        } else if (nums[i] === y) {
            diff -= 1;
        }
        
        // If we've seen this difference before, calculate the length
        if (diffPositions.has(diff)) {
            const length = i - diffPositions.get(diff);
            maxLength = Math.max(maxLength, length);
        } else {
            // Record the first position where we saw this difference
            diffPositions.set(diff, i);
        }
    }
    
    return maxLength;
}

// Test with the example
const nums = [1, 2, 3, 2, 3, 1, 3, 2, 1];
const x = 2;
const y = 3;
console.log(longestEqualOccurrences(nums, x, y));  // Expected output:
