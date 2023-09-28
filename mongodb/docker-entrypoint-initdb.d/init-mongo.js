db.createUser({
  user: "root",
  pwd: "password",
  roles: [
    {
      role: "readWrite",
      db: "testDB",
    },
  ],
});

db = new Mongo().getDB("questions");
db.createCollection("questions");


const data = [
  {
    title: "Reverse a String",
    description: `Write a function that reverses a string. The input string is given as an array of characters s.
      You must do this by modifying the input array in-place with O(1) extra memory.
      Example 1:
      Input: s = ["h","e","l","l","o"]
      Output: ["o","l","l","e","h"]
  
      Example 2:
      Input: s = ["H","a","n","n","a","h"]
      Output: ["h","a","n","n","a","H"]
  
      Constraints:
      • 1 <= s.length <= 105
      • s[i] is a printable ascii character.`,
    categories: ["Strings", "Algorithms"],
    complexity: "Easy",
  },
  {
    title: "Linked List Cycle Detection",
    description: `Given head, the head of a linked list, determine if the linked list has a cycle in it.
      There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
      Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
      Return true if there is a cycle in the linked list. Otherwise, return false.
      Example 1:
      Input: head = [3,2,0,-4], pos = 1
      Output: true
      Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
  
      Example 2:
      Input: head = [1,2], pos = 0
      Output: true
      Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
  
      Example 3:
      Input: head = [1], pos = -1
      Output: false
      Explanation: There is no cycle in the linked list.
  
      Constraints:
      • The number of the nodes in the list is in the range [0, 104].
      • -105 <= Node.val <= 105
      • pos is -1 or a valid index in the linked-list.
      
      Follow up: Can you solve it using O(1) (i.e. constant) memory?`,
    categories: ["Data Structures", "Algorithms"],
    complexity: "Easy",
  },
  {
    title: "Two Sum",
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
      You may assume that each input would have exactly one solution, and you may not use the same element twice.
      You can return the answer in any order.
  
      Example 1:
      Input: nums = [2,7,11,15], target = 9
      Output: [0,1]
      Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
  
      Example 2:
      Input: nums = [3,2,4], target = 6
      Output: [1,2]
  
      Example 3:
      Input: nums = [3,3], target = 6
      Output: [0,1]
      
      Constraints:
  
      2 <= nums.length <= 104
      -109 <= nums[i] <= 109
      -109 <= target <= 109
      Only one valid answer exists.`,
    categories: ["Algorithms", "Searching"],
    complexity: "Easy",
  },
  {
    title: "Roman to Integer",
    description: `Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
      Symbol       Value
      I             1
      V             5
      X             10
      L             50
      C             100
      D             500
      M             1000
      
      For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
      
      Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
      
      I can be placed before V (5) and X (10) to make 4 and 9. 
      X can be placed before L (50) and C (100) to make 40 and 90. 
      C can be placed before D (500) and M (1000) to make 400 and 900.
      Given a roman numeral, convert it to an integer.
      
       
      
      Example 1:
      
      Input: s = "III"
      Output: 3
      Explanation: III = 3.
      Example 2:
      
      Input: s = "LVIII"
      Output: 58
      Explanation: L = 50, V= 5, III = 3.
      Example 3:
      
      Input: s = "MCMXCIV"
      Output: 1994
      Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
       
      
      Constraints:
      
      1 <= s.length <= 15
      s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
      It is guaranteed that s is a valid roman numeral in the range [1, 3999].`,
    categories: ["Algorithms"],
    complexity: "Easy",
  },
  {
    title: "Add Binary",
    description: `Given two binary strings a and b, return their sum as a binary string.
   
      Example 1:
      
      Input: a = "11", b = "1"
      Output: "100"
      Example 2:
      
      Input: a = "1010", b = "1011"
      Output: "10101"
       
      
      Constraints:
      
      1 <= a.length, b.length <= 104
      a and b consist only of '0' or '1' characters.
      Each string does not contain leading zeros except for the zero itself.`,
    categories: ["Bit Manipulation", "Algorithms"],
    complexity: "Easy",
  },
  {
    title: "Fibonacci Number",
    description: `The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

      F(0) = 0, F(1) = 1
      F(n) = F(n - 1) + F(n - 2), for n > 1.
      Given n, calculate F(n).
      
       
      
      Example 1:
      
      Input: n = 2
      Output: 1
      Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
      Example 2:
      
      Input: n = 3
      Output: 2
      Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
      Example 3:
      
      Input: n = 4
      Output: 3
      Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
       
      
      Constraints:
      
      0 <= n <= 30`,
    categories: ["Recursion", "Algorithms"],
    complexity: "Easy",
  },
  {
    title: "Implement Stack using Queues",
    description: `Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

      Implement the MyStack class:
      
      void push(int x) Pushes element x to the top of the stack.
      int pop() Removes the element on the top of the stack and returns it.
      int top() Returns the element on the top of the stack.
      boolean empty() Returns true if the stack is empty, false otherwise.
      Notes:
      
      You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
      Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
       
      
      Example 1:
      
      Input
      ["MyStack", "push", "push", "top", "pop", "empty"]
      [[], [1], [2], [], [], []]
      Output
      [null, null, null, 2, 2, false]
      
      Explanation
      MyStack myStack = new MyStack();
      myStack.push(1);
      myStack.push(2);
      myStack.top(); // return 2
      myStack.pop(); // return 2
      myStack.empty(); // return False`,
    categories: ["Data Structures"],
    complexity: "Easy",
  },
  {
    title: "Repeated DNA Sequence",
    description: `The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

      For example, "ACGAATTCCG" is a DNA sequence.
      When studying DNA, it is useful to identify repeated sequences within the DNA.
      
      Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.
      
       
      
      Example 1:
      
      Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
      Output: ["AAAAACCCCC","CCCCCAAAAA"]
      Example 2:
      
      Input: s = "AAAAAAAAAAAAA"
      Output: ["AAAAAAAAAA"]
       
      
      Constraints:
      
      1 <= s.length <= 105
      s[i] is either 'A', 'C', 'G', or 'T'.`,
    categories: ["Algorithms, Bit Manipulation"],
    complexity: "Medium",
  },
  {
    title: "Course Scheudle",
    description: `There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

      For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
      Return true if you can finish all courses. Otherwise, return false.
      
       
      
      Example 1:
      
      Input: numCourses = 2, prerequisites = [[1,0]]
      Output: true
      Explanation: There are a total of 2 courses to take. 
      To take course 1 you should have finished course 0. So it is possible.
      Example 2:
      
      Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
      Output: false
      Explanation: There are a total of 2 courses to take. 
      To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
       
      
      Constraints:
      
      1 <= numCourses <= 2000
      0 <= prerequisites.length <= 5000
      prerequisites[i].length == 2
      0 <= ai, bi < numCourses
      All the pairs prerequisites[i] are unique.`,
    categories: ["Data Structures", "Algorithms"],
    complexity: "Medium",
  },
  {
    title: "LRU Cache",
    description: `Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

      Implement the LRUCache class:
      
      LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
      int get(int key) Return the value of the key if the key exists, otherwise return -1.
      void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
      The functions get and put must each run in O(1) average time complexity.
      
       
      
      Example 1:
      
      Input
      ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
      [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
      Output
      [null, null, null, 1, null, -1, null, -1, 3, 4]
      
      Explanation
      LRUCache lRUCache = new LRUCache(2);
      lRUCache.put(1, 1); // cache is {1=1}
      lRUCache.put(2, 2); // cache is {1=1, 2=2}
      lRUCache.get(1);    // return 1
      lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
      lRUCache.get(2);    // returns -1 (not found)
      lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
      lRUCache.get(1);    // return -1 (not found)
      lRUCache.get(3);    // return 3
      lRUCache.get(4);    // return 4
       
      
      Constraints:
      
      1 <= capacity <= 3000
      0 <= key <= 104
      0 <= value <= 105
      At most 2 * 105 calls will be made to get and put.`,
    categories: ["Data Structures"],
    complexity: "Medium",
  },
  {
    title: "Longest Palindromic Substring",
    description: `Given a string s, return the longest palindromic substring in s.
      
      Example 1:
      Input: s = "babad"
      Output: "bab"
      Explanation: "aba" is also a valid answer.
  
      Example 2:
      Input: s = "cbbd"
      Output: "bb"
      
      Constraints:
      1 <= s.length <= 1000
      s consist of only digits and English letters.`,
    categories: ["Algorithms"],
    complexity: "Medium",
  },
  {
    title: "Longest Substring Without Repeating Characters",
    description: `Given a string s, find the length of the longest substring without repeating characters.
      
      Example 1:
      Input: s = "abcabcbb"
      Output: 3
      Explanation: The answer is "abc", with the length of 3.
  
      Example 2:
      Input: s = "bbbbb"
      Output: 1
      Explanation: The answer is "b", with the length of 1.
  
      Example 3:
      Input: s = "pwwkew"
      Output: 3
      Explanation: The answer is "wke", with the length of 3.
      Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
       
      Constraints:
      0 <= s.length <= 5 * 104
      s consists of English letters, digits, symbols and spaces.`,
    categories: ["Algorithms", "Dynamic Programming"],
    complexity: "Medium",
  },
  {
    title: "Longest Common Subsequence",
    description: `Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

      A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
      
      For example, "ace" is a subsequence of "abcde".
      A common subsequence of two strings is a subsequence that is common to both strings.
      
       
      
      Example 1:
      
      Input: text1 = "abcde", text2 = "ace" 
      Output: 3  
      Explanation: The longest common subsequence is "ace" and its length is 3.
      Example 2:
      
      Input: text1 = "abc", text2 = "abc"
      Output: 3
      Explanation: The longest common subsequence is "abc" and its length is 3.
      Example 3:
      
      Input: text1 = "abc", text2 = "def"
      Output: 0
      Explanation: There is no such common subsequence, so the result is 0.
       
      
      Constraints:
      
      1 <= text1.length, text2.length <= 1000
      text1 and text2 consist of only lowercase English characters.`,
    categories: ["Strings", "Algorithms"],
    complexity: "Medium",
  },
  {
    title: "Sliding Window Maximum",
    description: `You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

      Return the max sliding window.
      
       
      
      Example 1:
      
      Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
      Output: [3,3,5,5,6,7]
      Explanation: 
      Window position                Max
      ---------------               -----
      [1  3  -1] -3  5  3  6  7       3
       1 [3  -1  -3] 5  3  6  7       3
       1  3 [-1  -3  5] 3  6  7       5
       1  3  -1 [-3  5  3] 6  7       5
       1  3  -1  -3 [5  3  6] 7       6
       1  3  -1  -3  5 [3  6  7]      7
      Example 2:
      
      Input: nums = [1], k = 1
      Output: [1]
       
      
      Constraints:
      
      1 <= nums.length <= 105
      -104 <= nums[i] <= 104
      1 <= k <= nums.length`,
    categories: ["Arrays", "Algorithms"],
    complexity: "Hard",
  },
  {
    title: "Merge k Sorted Lists",
    description: `You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
      Merge all the linked-lists into one sorted linked-list and return it.
      
      Example 1:
      Input: lists = [[1,4,5],[1,3,4],[2,6]]
      Output: [1,1,2,3,4,4,5,6]
      Explanation: The linked-lists are:
      [
        1->4->5,
        1->3->4,
        2->6
      ]
      merging them into one sorted list:
      1->1->2->3->4->4->5->6
  
      Example 2:
      Input: lists = []
      Output: []
  
      Example 3:
      Input: lists = [[]]
      Output: []
       
      Constraints:
      k == lists.length
      0 <= k <= 104
      0 <= lists[i].length <= 500
      -104 <= lists[i][j] <= 104
      lists[i] is sorted in ascending order.
      The sum of lists[i].length will not exceed 104.`,
    categories: ["Algorithms, Searching", "Sorting"],
    complexity: "Hard",
  },
  {
    title: "Regular Expression Matching",
    description: `Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
      '.' Matches any single character.​​​​
      '*' Matches zero or more of the preceding element.
      The matching should cover the entire input string (not partial).
      
      Example 1:
      Input: s = "aa", p = "a"
      Output: false
      Explanation: "a" does not match the entire string "aa".
  
      Example 2:
      Input: s = "aa", p = "a*"
      Output: true
      Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
  
      Example 3:
      Input: s = "ab", p = ".*"
      Output: true
      Explanation: ".*" means "zero or more (*) of any character (.)".
       
      Constraints:
      1 <= s.length <= 20
      1 <= p.length <= 20
      s contains only lowercase English letters.
      p contains only lowercase English letters, '.', and '*'.
      It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.`,
    categories: ["Algorithms", "Data Structure"],
    complexity: "Hard",
  },
  {
    title: "Median of Two Sorted Arrays",
    description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
      The overall run time complexity should be O(log (m+n)).
      
      Example 1:
      Input: nums1 = [1,3], nums2 = [2]
      Output: 2.00000
      Explanation: merged array = [1,2,3] and median is 2.
  
      Example 2:
      Input: nums1 = [1,2], nums2 = [3,4]
      Output: 2.50000
      Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
      
      Constraints:
      nums1.length == m
      nums2.length == n
      0 <= m <= 1000
      0 <= n <= 1000
      1 <= m + n <= 2000
      -106 <= nums1[i], nums2[i] <= 106`,
    categories: ["Algorithms", "Searching"],
    complexity: "Hard",
  },
  {
    title: "Wildcard Matching",
    description: `Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

      '?' Matches any single character.
      '*' Matches any sequence of characters (including the empty sequence).
      The matching should cover the entire input string (not partial).
      
       
      
      Example 1:
      
      Input: s = "aa", p = "a"
      Output: false
      Explanation: "a" does not match the entire string "aa".
      Example 2:
      
      Input: s = "aa", p = "*"
      Output: true
      Explanation: '*' matches any sequence.
      Example 3:
      
      Input: s = "cb", p = "?a"
      Output: false
      Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
       
      
      Constraints:
      
      0 <= s.length, p.length <= 2000
      s contains only lowercase English letters.
      p contains only lowercase English letters, '?' or '*'.`,
    categories: ["Strings", "Algorithms"],
    complexity: "Hard",
  },
]

const dataLength = data.length;

for (var i = 0; i < dataLength; i++) {
  let currData = data[i];
  currData.categories.sort();
}


db.questions.insertMany(data);
