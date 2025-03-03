# Two Sum

## Problem Statement
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

## My Approach
1. I needed to look for two numbers whose sum is equal to the target value
2. A brute force approach would be for me to use nested loops which has a quadratic time complexity (O(n^2))
3. In order to optimize the solution, I decided to use a hash map to store numbers I come across in the array and their indices
4. For each number, I calculated the difference in order to know what value I needed to find (diff = target - current number)
5. If the difference of the two numbers i.e. (target - current number) exists in the hash map, it means I have  found the solution
6. If not, I set the current number and its index into the hash map as a key and value property i.e. (current number = key, index = value)

## Solution Walkthrough
- For array [2, 7, 11, 15] with target 9:
  - Start with empty map
  - Process 2: Need to find 7, not in map → add {2: 0} to map
  - Process 7: Need to find 2, found at index 0 → return [0, 1]

## Complexity Analysis
- Time Complexity: O(n) - I loop through the array once
- Space Complexity: O(n) - in worst case, I use only one map to store almost all the elements

## What I Learned
- Hash maps provide efficient lookups
- The "difference" approach is a common pattern for tackling sum problems
- Looping once in algorithms are often possible by storing the previous information
