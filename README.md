# Data Structures and Algorithms Learning Journey

## Overview
This repository documents my journey learning data structures and algorithms by solving practical problems. For each data structure I learn, I solve at least two related problems to reinforce my understanding and improve my problem-solving skills.

## Structure
The repository is organized by data structure, with each data structure having its own directory containing subdirectories for individual problems:

```
└── Data-Structure-Algorithms/
    ├── Arrays/
    │   ├── TwoSum/
    │   │   ├── README.md
    │   │   └── solution.js
    │   └── [Other Array Problems]/
    ├── HashMaps/
    │   ├── ValidAnagram/
    │   │   ├── README.md
    │   │   └── solution.js
    │   ├── LongestPalindrome/
    │   │   ├── README.md
    │   │   └── solution.js
    │   └── [Other HashMap Problems]/
    └── [Other Data Structures]/
```

## Problems Solved So Far

### HashMaps

#### 1. Valid Anagram
- **Problem**: Determine if two strings are anagrams of each other.
- **Solution Approach**: Used a HashMap to count character frequencies in the first string, then decremented counts while checking the second string.
- **Key Insight**: HashMap provides O(1) lookups, allowing us to avoid sorting (which would be O(n log n)) and achieve O(n) time complexity.

#### 2. Longest Palindrome
- **Problem**: Find the length of the longest palindrome that can be built from the characters in a string.
- **Solution Approach**: Used a HashMap to count character frequencies, then calculated how many characters can be used in a palindrome.
- **Key Insight**: We can use all even-count characters plus (count-1) for odd counts, and place one extra character in the middle if we have any odd counts.

### Arrays

#### 1. Two Sum
- **Problem**: Find two numbers in an array that add up to a specific target.
- **Solution Approach**: Used a HashMap to store numbers and their indices, checking if the complement exists.
- **Key Insight**: The "difference approach" allows us to avoid nested loops by using a HashMap for O(1) lookups.

## Learning Process
For each data structure:
1. Study the fundamental concepts and operations
2. Identify common problem patterns related to the data structure
3. Solve at least two problems that use the data structure
4. Document the solutions with explanations of my thought process
5. Analyze the time and space complexity of my solutions

## Goals
- Master common data structures and their applications
- Develop efficient problem-solving strategies
- Build a portfolio of well-documented solutions
- Improve code readability and organization
- Track progress and identify areas for improvement

## Next Steps
- [ ] Learn and implement problems related to Stacks and Queues
- [ ] Explore Linked Lists and their applications
- [ ] Dive into Tree-based data structures
- [ ] Study Graph algorithms and their implementations
