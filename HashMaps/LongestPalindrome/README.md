# Longest Palindrome

## Problem Statement
Given a string `s` consisting of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters. A palindrome is a string that reads the same forward and backward.

## My Approach
1. I needed to determine the maximum length of a palindrome that can be constructed from the given characters
2. I realized that characters appearing an even number of times can all be used in a palindrome
3. For characters appearing an odd number of times, I can use (count - 1) characters to maintain symmetry
4. Additionally, I can place one character in the middle of the palindrome if any character appears an odd number of times
5. I use a hash map to count the frequency of each character in the string

## Solution Walkthrough
- For string "abccccdd":
  - Create a frequency map: {'a':1, 'b':1, 'c':4, 'd':2}
  - Process 'a' (count=1): Use 0 characters, set isOdd=true
  - Process 'b' (count=1): Use 0 characters, isOdd already true
  - Process 'c' (count=4): Use all 4 characters (even count)
  - Process 'd' (count=2): Use both characters (even count)
  - Add 1 for the middle character (since we have odd counts)
  - Total length: 0 + 0 + 4 + 2 + 1 = 7
  - Possible palindrome: "dccaccd"

## Complexity Analysis
- Time Complexity: O(n) where n is the length of the input string
- Space Complexity: O(k) where k is the number of unique characters in the string

## Use Cases
- Finding the longest possible palindrome from a set of characters
- Word games and puzzles
- Text analysis and pattern matching

## Function Usage
```javascript
// Returns the length of the longest possible palindrome
console.log(longestPalindrome('abccccdd')); // 7
console.log(longestPalindrome('ssgggrt'));  // 5
console.log(longestPalindrome('ffgjwjww')); // 7
```

## What I Learned
- In palindromes, characters must be used in pairs to maintain symmetry
- We can use at most one character with an odd count (placed in the middle)
- This greedy approach works because we're only concerned with the length, not the actual palindrome
- Character frequency counting is a common pattern in string manipulation problems
