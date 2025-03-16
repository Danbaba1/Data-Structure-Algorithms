function generate(numRows) {
    // Initialize the result array with the first row
    const result = [[1]];
    
    // Generate each row starting from the second row (index 1)
    for (let i = 1; i < numRows; i++) {
        const prevRow = result[i - 1];
        const currentRow = [1]; // First element is always 1
        
        // Generate the middle elements
        for (let j = 1; j < i; j++) {
            // Each element is the sum of the two elements above it
            currentRow.push(prevRow[j - 1] + prevRow[j]);
        }
        
        currentRow.push(1); // Last element is always 1
        result.push(currentRow);
    }
    
    return result;
};

console.log(generate(5))
