# Valid Anagram Checker

## Problem Statement
Determine if two strings are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## My Approach
1. First, I check if both strings have the same length (not shown in the code, but is a common optimization)
2. I use a hash map to count the frequency of each character in the first string
3. Then I iterate through the second string, decrementing the count for each character
4. If I encounter a character that doesn't exist in the map or has a count of 0, the strings are not anagrams
5. If I successfully process all characters in the second string, the strings are anagrams

## Solution Walkthrough
- For strings 'listen' and 'silent':
  - Create a map with counts for 'listen': {'l':1, 'i':1, 's':1, 't':1, 'e':1, 'n':1}
  - Process 's' in 'silent': Decrement count for 's' → {'l':1, 'i':1, 's':0, 't':1, 'e':1, 'n':1}
  - Process 'i' in 'silent': Decrement count for 'i' → {'l':1, 'i':0, 's':0, 't':1, 'e':1, 'n':1}
  - Process 'l' in 'silent': Decrement count for 'l' → {'l':0, 'i':0, 's':0, 't':1, 'e':1, 'n':1}
  - Process 'e' in 'silent': Decrement count for 'e' → {'l':0, 'i':0, 's':0, 't':1, 'e':0, 'n':1}
  - Process 'n' in 'silent': Decrement count for 'n' → {'l':0, 'i':0, 's':0, 't':1, 'e':0, 'n':0}
  - Process 't' in 'silent': Decrement count for 't' → {'l':0, 'i':0, 's':0, 't':0, 'e':0, 'n':0}
  - All characters processed successfully, return true

## Complexity Analysis
- Time Complexity: O(n) where n is the length of the input strings
- Space Complexity: O(k) where k is the number of unique characters in the first string

## Use Cases
- Checking if two words are anagrams of each other
- Word games and puzzles
- Text analysis and linguistic applications

## Function Usage
```javascript
// Returns true for valid anagrams
console.log(isValidAnagram('listen', 'silent')); // true
console.log(isValidAnagram('hello', 'olleh'));   // true

// Returns false for non-anagrams
console.log(isValidAnagram('hello', 'world'));   // false
console.log(isValidAnagram('nexus', 'suten'));   // false
```

## What I Learned
- Hash maps provide an efficient way to count and track character frequencies
- This pattern can be applied to other string comparison problems
- The solution handles any valid string input, not just dictionary words
