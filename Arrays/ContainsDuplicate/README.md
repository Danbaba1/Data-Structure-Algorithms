# Contains Duplicate

## Problem Statement
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

## My Approach
1. I needed to look for a number that appears twice in the array
2. I used a map to store numbers that I found in a single loop
3. When I find a number I check if it already exists in the map
4. If it already exists I return true if not I store it in the map.

## Solution Walkthrough
- For array [1, 2, 3, 1]:
  - Start with empty map
  - Process 2: Need to find a duplicate
  - Process 7: Need to find if 1 occurs again, found it at index 3.

## Complexity Analysis
- Time Complexity: O(n) - I loop through the array once
- Space Complexity: O(n) - in worst case, I use only one map to store almost all the elements

## What I Learned
- Hash maps provide efficient lookups
- Looping once in algorithms are often possible by storing the previous information
