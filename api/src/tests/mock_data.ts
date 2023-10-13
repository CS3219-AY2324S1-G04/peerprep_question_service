/**
 * @file Mock data for unit tests.
 * @author Irving de Boer
 */
export const mockData = [
    {
        _id: "60f1b5b0e1b9a1b4c8a7a8a1",
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
        categories: ["Algorithms", "Strings"],
        complexity: "Easy",
    },
    {
        _id: "60f1b5b0e1b9a1b4c8a7a8a2",
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
        categories: ["Algorithms", "Data Structures"],
        complexity: "Easy",
    },
]
