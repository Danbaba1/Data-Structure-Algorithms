const correctEfficientSolution = (arr = [], x, y) => {
    // Edge case: x and y are the same value
    if (x === y) {
      const index = arr.indexOf(x);
      return index >= 0 ? 1 : 0;
    }
    
    // First pass: count total occurrences
    let totalX = 0;
    let totalY = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) totalX++;
      if (arr[i] === y) totalY++;
    }
    
    // If either value doesn't occur, no valid subarray exists
    if (totalX === 0 || totalY === 0) return 0;
    
    // Determine target count (the minimum of total occurrences)
    const targetCount = Math.min(totalX, totalY);
    
    // Second pass: Find shortest subarray with targetCount of each
    let xCount = 0;
    let yCount = 0;
    let left = 0;
    let minLength = Infinity;
    
    for (let right = 0; right < arr.length; right++) {
      // Expand window to the right
      if (arr[right] === x) xCount++;
      if (arr[right] === y) yCount++;
      
      // Shrink window from the left if possible while maintaining counts
      while (left < right && 
             (arr[left] !== x || xCount > targetCount) && 
             (arr[left] !== y || yCount > targetCount)) {
        if (arr[left] === x) xCount--;
        if (arr[left] === y) yCount--;
        left++;
      }
      
      // Check if window has exactly targetCount of each value
      if (xCount === targetCount && yCount === targetCount) {
        minLength = Math.min(minLength, right - left + 1);
      }
    }
    
    return minLength === Infinity ? 0 : minLength;
  };
  
  const arr = [1, 2, 3, 2, 3, 1, 3, 2, 1];
  const arr2 = [4, 5, 4, 6, 4, 5, 5, 4, 5, 6, 5, 4, 6, 1, 2, 7, 5, 4, 5, 4, 6, 4, 5, 4, 5, 5, 6, 5, 7, 8, 9, 5];
  
  console.log(correctEfficientSolution(arr, 2, 3)); // 7
  console.log(correctEfficientSolution(arr2, 4, 5)); // 25
  