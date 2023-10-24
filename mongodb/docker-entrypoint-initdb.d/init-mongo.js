db.createUser({
  user: process.env.MONGODB_USER,
  pwd: process.env.MONGODB_PASSWORD,
  roles: [
    {
      role: "readWrite",
      db: process.env.MONGO_DB,
    },
  ],
});

db = new Mongo().getDB(process.env.MONGO_DB);
db.createCollection('questions');


const data = [
  {
    title: "Reverse String",
    categories: [
      "Two Pointers",
      "String"
    ],
    complexity: "Easy",
    deleted: false,
    deletedAt: null,
    description: "Write a function that reverses a string. The input string is given as an array of characters s.\n\nYou must do this by modifying the input array in-place with O(1) extra memory.\n\n \nExample 1:\nInput: s = [\"h\",\"e\",\"l\",\"l\",\"o\"]\nOutput: [\"o\",\"l\",\"l\",\"e\",\"h\"]\nExample 2:\nInput: s = [\"H\",\"a\",\"n\",\"n\",\"a\",\"h\"]\nOutput: [\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]\n\n \nConstraints:\n\n\n\t1 <= s.length <= 105\n\ts[i] is a printable ascii character.\n\n",
    template: [
      {
        language: "C++",
        langSlug: "cpp",
        code: "class Solution {\npublic:\n    void reverseString(vector<char>& s) {\n        \n    }\n};"
      },
      {
        language: "Java",
        langSlug: "java",
        code: "class Solution {\n    public void reverseString(char[] s) {\n        \n    }\n}"
      },
      {
        language: "Python",
        langSlug: "python",
        code: "class Solution(object):\n    def reverseString(self, s):\n        \"\"\"\n        :type s: List[str]\n        :rtype: None Do not return anything, modify s in-place instead.\n        \"\"\"\n        "
      },
      {
        language: "Python3",
        langSlug: "python3",
        code: "class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        \"\"\"\n        Do not return anything, modify s in-place instead.\n        \"\"\"\n        "
      },
      {
        language: "C",
        langSlug: "c",
        code: "void reverseString(char* s, int sSize){\n\n}"
      },
      {
        language: "C#",
        langSlug: "csharp",
        code: "public class Solution {\n    public void ReverseString(char[] s) {\n        \n    }\n}"
      },
      {
        language: "JavaScript",
        langSlug: "javascript",
        code: "/**\n * @param {character[]} s\n * @return {void} Do not return anything, modify s in-place instead.\n */\nvar reverseString = function(s) {\n    \n};"
      },
      {
        language: "TypeScript",
        langSlug: "typescript",
        code: "/**\n Do not return anything, modify s in-place instead.\n */\nfunction reverseString(s: string[]): void {\n\n};"
      },
      {
        language: "PHP",
        langSlug: "php",
        code: "class Solution {\n\n    /**\n     * @param String[] $s\n     * @return NULL\n     */\n    function reverseString(&$s) {\n        \n    }\n}"
      },
      {
        language: "Swift",
        langSlug: "swift",
        code: "class Solution {\n    func reverseString(_ s: inout [Character]) {\n        \n    }\n}"
      },
      {
        language: "Kotlin",
        langSlug: "kotlin",
        code: "class Solution {\n    fun reverseString(s: CharArray): Unit {\n        \n    }\n}"
      },
      {
        language: "Dart",
        langSlug: "dart",
        code: "class Solution {\n  void reverseString(List<String> s) {\n\n  }\n}"
      },
      {
        language: "Go",
        langSlug: "golang",
        code: "func reverseString(s []byte)  {\n    \n}"
      },
      {
        language: "Ruby",
        langSlug: "ruby",
        code: "# @param {Character[]} s\n# @return {Void} Do not return anything, modify s in-place instead.\ndef reverse_string(s)\n    \nend"
      },
      {
        language: "Scala",
        langSlug: "scala",
        code: "object Solution {\n    def reverseString(s: Array[Char]): Unit = {\n        \n    }\n}"
      },
      {
        language: "Rust",
        langSlug: "rust",
        code: "impl Solution {\n    pub fn reverse_string(s: &mut Vec<char>) {\n        \n    }\n}"
      },
      {
        language: "Racket",
        langSlug: "racket",
        code: "(define/contract (reverse-string s)\n  (-> (listof char?) void?)\n\n  )"
      }
    ]
  },
  {
    title: "Linked List Cycle",
    categories: [
      "Hash Table",
      "Linked List",
      "Two Pointers"
    ],
    complexity: "Easy",
    deleted: false,
    deletedAt: null,
    description: "Given head, the head of a linked list, determine if the linked list has a cycle in it.\n\nThere is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.\n\nReturn true if there is a cycle in the linked list. Otherwise, return false.\n\n \nExample 1:\n\n\nInput: head = [3,2,0,-4], pos = 1\nOutput: true\nExplanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).\n\n\nExample 2:\n\n\nInput: head = [1,2], pos = 0\nOutput: true\nExplanation: There is a cycle in the linked list, where the tail connects to the 0th node.\n\n\nExample 3:\n\n\nInput: head = [1], pos = -1\nOutput: false\nExplanation: There is no cycle in the linked list.\n\n\n \nConstraints:\n\n\n\tThe number of the nodes in the list is in the range [0, 104].\n\t-105 <= Node.val <= 105\n\tpos is -1 or a valid index in the linked-list.\n\n\n \nFollow up: Can you solve it using O(1) (i.e. constant) memory?\n",
    template: [
      {
        language: "C++",
        langSlug: "cpp",
        code: "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode(int x) : val(x), next(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    bool hasCycle(ListNode *head) {\n        \n    }\n};"
      },
      {
        language: "Java",
        langSlug: "java",
        code: "/**\n * Definition for singly-linked list.\n * class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) {\n *         val = x;\n *         next = null;\n *     }\n * }\n */\npublic class Solution {\n    public boolean hasCycle(ListNode head) {\n        \n    }\n}"
      },
      {
        language: "Python",
        langSlug: "python",
        code: "# Definition for singly-linked list.\n# class ListNode(object):\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution(object):\n    def hasCycle(self, head):\n        \"\"\"\n        :type head: ListNode\n        :rtype: bool\n        \"\"\"\n        "
      },
      {
        language: "Python3",
        langSlug: "python3",
        code: "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\n        "
      },
      {
        language: "C",
        langSlug: "c",
        code: "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     struct ListNode *next;\n * };\n */\nbool hasCycle(struct ListNode *head) {\n    \n}"
      },
      {
        language: "C#",
        langSlug: "csharp",
        code: "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     public int val;\n *     public ListNode next;\n *     public ListNode(int x) {\n *         val = x;\n *         next = null;\n *     }\n * }\n */\npublic class Solution {\n    public bool HasCycle(ListNode head) {\n        \n    }\n}"
      },
      {
        language: "JavaScript",
        langSlug: "javascript",
        code: "/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n\n/**\n * @param {ListNode} head\n * @return {boolean}\n */\nvar hasCycle = function(head) {\n    \n};"
      },
      {
        language: "TypeScript",
        langSlug: "typescript",
        code: "/**\n * Definition for singly-linked list.\n * class ListNode {\n *     val: number\n *     next: ListNode | null\n *     constructor(val?: number, next?: ListNode | null) {\n *         this.val = (val===undefined ? 0 : val)\n *         this.next = (next===undefined ? null : next)\n *     }\n * }\n */\n\nfunction hasCycle(head: ListNode | null): boolean {\n    \n};"
      },
      {
        language: "PHP",
        langSlug: "php",
        code: "/**\n * Definition for a singly-linked list.\n * class ListNode {\n *     public $val = 0;\n *     public $next = null;\n *     function __construct($val) { $this->val = $val; }\n * }\n */\n\nclass Solution {\n    /**\n     * @param ListNode $head\n     * @return Boolean\n     */\n    function hasCycle($head) {\n        \n    }\n}"
      },
      {
        language: "Swift",
        langSlug: "swift",
        code: "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     public var val: Int\n *     public var next: ListNode?\n *     public init(_ val: Int) {\n *         self.val = val\n *         self.next = nil\n *     }\n * }\n */\n\nclass Solution {\n    func hasCycle(_ head: ListNode?) -> Bool {\n        \n    }\n}"
      },
      {
        language: "Kotlin",
        langSlug: "kotlin",
        code: "/**\n * Example:\n * var li = ListNode(5)\n * var v = li.`val`\n * Definition for singly-linked list.\n * class ListNode(var `val`: Int) {\n *     var next: ListNode? = null\n * }\n */\n\nclass Solution {\n    fun hasCycle(head: ListNode?): Boolean {\n        \n    }\n}"
      },
      {
        language: "Go",
        langSlug: "golang",
        code: "/**\n * Definition for singly-linked list.\n * type ListNode struct {\n *     Val int\n *     Next *ListNode\n * }\n */\nfunc hasCycle(head *ListNode) bool {\n    \n}"
      },
      {
        language: "Ruby",
        langSlug: "ruby",
        code: "# Definition for singly-linked list.\n# class ListNode\n#     attr_accessor :val, :next\n#     def initialize(val)\n#         @val = val\n#         @next = nil\n#     end\n# end\n\n# @param {ListNode} head\n# @return {Boolean}\ndef hasCycle(head)\n    \nend"
      },
      {
        language: "Scala",
        langSlug: "scala",
        code: "/**\n * Definition for singly-linked list.\n * class ListNode(var _x: Int = 0) {\n *   var next: ListNode = null\n *   var x: Int = _x\n * }\n */\n\nobject Solution {\n    def hasCycle(head: ListNode): Boolean = {\n        \n    }\n}"
      }
    ]
  },
  {
    title: "Two Sum",
    categories: [
      "Array",
      "Hash Table"
    ],
    complexity: "Easy",
    deleted: false,
    deletedAt: null,
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.\n\n \nExample 1:\n\n\nInput: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].\n\n\nExample 2:\n\n\nInput: nums = [3,2,4], target = 6\nOutput: [1,2]\n\n\nExample 3:\n\n\nInput: nums = [3,3], target = 6\nOutput: [0,1]\n\n\n \nConstraints:\n\n\n\t2 <= nums.length <= 104\n\t-109 <= nums[i] <= 109\n\t-109 <= target <= 109\n\tOnly one valid answer exists.\n\n\n \nFollow-up: Can you come up with an algorithm that is less than O(n2) time complexity?",
    template: [
      {
        language: "C++",
        langSlug: "cpp",
        code: "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        \n    }\n};"
      },
      {
        language: "Java",
        langSlug: "java",
        code: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        \n    }\n}"
      },
      {
        language: "Python",
        langSlug: "python",
        code: "class Solution(object):\n    def twoSum(self, nums, target):\n        \"\"\"\n        :type nums: List[int]\n        :type target: int\n        :rtype: List[int]\n        \"\"\"\n        "
      },
      {
        language: "Python3",
        langSlug: "python3",
        code: "class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        "
      },
      {
        language: "C",
        langSlug: "c",
        code: "/**\n * Note: The returned array must be malloced, assume caller calls free().\n */\nint* twoSum(int* nums, int numsSize, int target, int* returnSize){\n\n}"
      },
      {
        language: "C#",
        langSlug: "csharp",
        code: "public class Solution {\n    public int[] TwoSum(int[] nums, int target) {\n        \n    }\n}"
      },
      {
        language: "JavaScript",
        langSlug: "javascript",
        code: "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function(nums, target) {\n    \n};"
      },
      {
        language: "TypeScript",
        langSlug: "typescript",
        code: "function twoSum(nums: number[], target: number): number[] {\n\n};"
      },
      {
        language: "PHP",
        langSlug: "php",
        code: "class Solution {\n\n    /**\n     * @param Integer[] $nums\n     * @param Integer $target\n     * @return Integer[]\n     */\n    function twoSum($nums, $target) {\n        \n    }\n}"
      },
      {
        language: "Swift",
        langSlug: "swift",
        code: "class Solution {\n    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {\n        \n    }\n}"
      },
      {
        language: "Kotlin",
        langSlug: "kotlin",
        code: "class Solution {\n    fun twoSum(nums: IntArray, target: Int): IntArray {\n        \n    }\n}"
      },
      {
        language: "Dart",
        langSlug: "dart",
        code: "class Solution {\n  List<int> twoSum(List<int> nums, int target) {\n\n  }\n}"
      },
      {
        language: "Go",
        langSlug: "golang",
        code: "func twoSum(nums []int, target int) []int {\n    \n}"
      },
      {
        language: "Ruby",
        langSlug: "ruby",
        code: "# @param {Integer[]} nums\n# @param {Integer} target\n# @return {Integer[]}\ndef two_sum(nums, target)\n    \nend"
      },
      {
        language: "Scala",
        langSlug: "scala",
        code: "object Solution {\n    def twoSum(nums: Array[Int], target: Int): Array[Int] = {\n        \n    }\n}"
      },
      {
        language: "Rust",
        langSlug: "rust",
        code: "impl Solution {\n    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {\n        \n    }\n}"
      },
      {
        language: "Racket",
        langSlug: "racket",
        code: "(define/contract (two-sum nums target)\n  (-> (listof exact-integer?) exact-integer? (listof exact-integer?))\n\n  )"
      },
      {
        language: "Erlang",
        langSlug: "erlang",
        code: "-spec two_sum(Nums :: [integer()], Target :: integer()) -> [integer()].\ntwo_sum(Nums, Target) ->\n  ."
      },
      {
        language: "Elixir",
        langSlug: "elixir",
        code: "defmodule Solution do\n  @spec two_sum(nums :: [integer], target :: integer) :: [integer]\n  def two_sum(nums, target) do\n\n  end\nend"
      }
    ]
  },
  {
    title: "Roman to Integer",
    categories: [
      "Hash Table",
      "Math",
      "String"
    ],
    complexity: "Easy",
    deleted: false,
    deletedAt: null,
    description: "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.\n\n\nSymbol       Value\nI             1\nV             5\nX             10\nL             50\nC             100\nD             500\nM             1000\n\nFor example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.\n\nRoman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:\n\n\n\tI can be placed before V (5) and X (10) to make 4 and 9. \n\tX can be placed before L (50) and C (100) to make 40 and 90. \n\tC can be placed before D (500) and M (1000) to make 400 and 900.\n\n\nGiven a roman numeral, convert it to an integer.\n\n \nExample 1:\n\n\nInput: s = \"III\"\nOutput: 3\nExplanation: III = 3.\n\n\nExample 2:\n\n\nInput: s = \"LVIII\"\nOutput: 58\nExplanation: L = 50, V= 5, III = 3.\n\n\nExample 3:\n\n\nInput: s = \"MCMXCIV\"\nOutput: 1994\nExplanation: M = 1000, CM = 900, XC = 90 and IV = 4.\n\n\n \nConstraints:\n\n\n\t1 <= s.length <= 15\n\ts contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').\n\tIt is guaranteed that s is a valid roman numeral in the range [1, 3999].\n\n",
    template: [
      {
        language: "C++",
        langSlug: "cpp",
        code: "class Solution {\npublic:\n    int romanToInt(string s) {\n        \n    }\n};"
      },
      {
        language: "Java",
        langSlug: "java",
        code: "class Solution {\n    public int romanToInt(String s) {\n        \n    }\n}"
      },
      {
        language: "Python",
        langSlug: "python",
        code: "class Solution(object):\n    def romanToInt(self, s):\n        \"\"\"\n        :type s: str\n        :rtype: int\n        \"\"\"\n        "
      },
      {
        language: "Python3",
        langSlug: "python3",
        code: "class Solution:\n    def romanToInt(self, s: str) -> int:\n        "
      },
      {
        language: "C",
        langSlug: "c",
        code: "int romanToInt(char * s){\n\n}"
      },
      {
        language: "C#",
        langSlug: "csharp",
        code: "public class Solution {\n    public int RomanToInt(string s) {\n        \n    }\n}"
      },
      {
        language: "JavaScript",
        langSlug: "javascript",
        code: "/**\n * @param {string} s\n * @return {number}\n */\nvar romanToInt = function(s) {\n    \n};"
      },
      {
        language: "TypeScript",
        langSlug: "typescript",
        code: "function romanToInt(s: string): number {\n\n};"
      },
      {
        language: "PHP",
        langSlug: "php",
        code: "class Solution {\n\n    /**\n     * @param String $s\n     * @return Integer\n     */\n    function romanToInt($s) {\n        \n    }\n}"
      },
      {
        language: "Swift",
        langSlug: "swift",
        code: "class Solution {\n    func romanToInt(_ s: String) -> Int {\n        \n    }\n}"
      },
      {
        language: "Kotlin",
        langSlug: "kotlin",
        code: "class Solution {\n    fun romanToInt(s: String): Int {\n        \n    }\n}"
      },
      {
        language: "Dart",
        langSlug: "dart",
        code: "class Solution {\n  int romanToInt(String s) {\n\n  }\n}"
      },
      {
        language: "Go",
        langSlug: "golang",
        code: "func romanToInt(s string) int {\n    \n}"
      },
      {
        language: "Ruby",
        langSlug: "ruby",
        code: "# @param {String} s\n# @return {Integer}\ndef roman_to_int(s)\n    \nend"
      },
      {
        language: "Scala",
        langSlug: "scala",
        code: "object Solution {\n    def romanToInt(s: String): Int = {\n        \n    }\n}"
      },
      {
        language: "Rust",
        langSlug: "rust",
        code: "impl Solution {\n    pub fn roman_to_int(s: String) -> i32 {\n        \n    }\n}"
      },
      {
        language: "Racket",
        langSlug: "racket",
        code: "(define/contract (roman-to-int s)\n  (-> string? exact-integer?)\n\n  )"
      },
      {
        language: "Erlang",
        langSlug: "erlang",
        code: "-spec roman_to_int(S :: unicode:unicode_binary()) -> integer().\nroman_to_int(S) ->\n  ."
      },
      {
        language: "Elixir",
        langSlug: "elixir",
        code: "defmodule Solution do\n  @spec roman_to_int(s :: String.t) :: integer\n  def roman_to_int(s) do\n\n  end\nend"
      }
    ]
  },
  {
    title: "Add Binary",
    categories: [
      "Math",
      "String",
      "Bit Manipulation",
      "Simulation"
    ],
    complexity: "Easy",
    deleted: false,
    deletedAt: null,
    description: "Given two binary strings a and b, return their sum as a binary string.\n\n \nExample 1:\nInput: a = \"11\", b = \"1\"\nOutput: \"100\"\nExample 2:\nInput: a = \"1010\", b = \"1011\"\nOutput: \"10101\"\n\n \nConstraints:\n\n\n\t1 <= a.length, b.length <= 104\n\ta and b consist only of '0' or '1' characters.\n\tEach string does not contain leading zeros except for the zero itself.\n\n",
    template: [
      {
        language: "C++",
        langSlug: "cpp",
        code: "class Solution {\npublic:\n    string addBinary(string a, string b) {\n        \n    }\n};"
      },
      {
        language: "Java",
        langSlug: "java",
        code: "class Solution {\n    public String addBinary(String a, String b) {\n        \n    }\n}"
      },
      {
        language: "Python",
        langSlug: "python",
        code: "class Solution(object):\n    def addBinary(self, a, b):\n        \"\"\"\n        :type a: str\n        :type b: str\n        :rtype: str\n        \"\"\"\n        "
      },
      {
        language: "Python3",
        langSlug: "python3",
        code: "class Solution:\n    def addBinary(self, a: str, b: str) -> str:\n        "
      },
      {
        language: "C",
        langSlug: "c",
        code: "char * addBinary(char * a, char * b){\n\n}"
      },
      {
        language: "C#",
        langSlug: "csharp",
        code: "public class Solution {\n    public string AddBinary(string a, string b) {\n        \n    }\n}"
      },
      {
        language: "JavaScript",
        langSlug: "javascript",
        code: "/**\n * @param {string} a\n * @param {string} b\n * @return {string}\n */\nvar addBinary = function(a, b) {\n    \n};"
      },
      {
        language: "TypeScript",
        langSlug: "typescript",
        code: "function addBinary(a: string, b: string): string {\n\n};"
      },
      {
        language: "PHP",
        langSlug: "php",
        code: "class Solution {\n\n    /**\n     * @param String $a\n     * @param String $b\n     * @return String\n     */\n    function addBinary($a, $b) {\n        \n    }\n}"
      },
      {
        language: "Swift",
        langSlug: "swift",
        code: "class Solution {\n    func addBinary(_ a: String, _ b: String) -> String {\n        \n    }\n}"
      },
      {
        language: "Kotlin",
        langSlug: "kotlin",
        code: "class Solution {\n    fun addBinary(a: String, b: String): String {\n        \n    }\n}"
      },
      {
        language: "Dart",
        langSlug: "dart",
        code: "class Solution {\n  String addBinary(String a, String b) {\n\n  }\n}"
      },
      {
        language: "Go",
        langSlug: "golang",
        code: "func addBinary(a string, b string) string {\n    \n}"
      },
      {
        language: "Ruby",
        langSlug: "ruby",
        code: "# @param {String} a\n# @param {String} b\n# @return {String}\ndef add_binary(a, b)\n    \nend"
      },
      {
        language: "Scala",
        langSlug: "scala",
        code: "object Solution {\n    def addBinary(a: String, b: String): String = {\n        \n    }\n}"
      },
      {
        language: "Rust",
        langSlug: "rust",
        code: "impl Solution {\n    pub fn add_binary(a: String, b: String) -> String {\n        \n    }\n}"
      },
      {
        language: "Racket",
        langSlug: "racket",
        code: "(define/contract (add-binary a b)\n  (-> string? string? string?)\n\n  )"
      },
      {
        language: "Erlang",
        langSlug: "erlang",
        code: "-spec add_binary(A :: unicode:unicode_binary(), B :: unicode:unicode_binary()) -> unicode:unicode_binary().\nadd_binary(A, B) ->\n  ."
      },
      {
        language: "Elixir",
        langSlug: "elixir",
        code: "defmodule Solution do\n  @spec add_binary(a :: String.t, b :: String.t) :: String.t\n  def add_binary(a, b) do\n\n  end\nend"
      }
    ]
  },
  {
    title: "Fibonacci Number",
    categories: [
      "Math",
      "Dynamic Programming",
      "Recursion",
      "Memoization"
    ],
    complexity: "Easy",
    deleted: false,
    deletedAt: null,
    description: "The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,\n\n\nF(0) = 0, F(1) = 1\nF(n) = F(n - 1) + F(n - 2), for n > 1.\n\n\nGiven n, calculate F(n).\n\n \nExample 1:\n\n\nInput: n = 2\nOutput: 1\nExplanation: F(2) = F(1) + F(0) = 1 + 0 = 1.\n\n\nExample 2:\n\n\nInput: n = 3\nOutput: 2\nExplanation: F(3) = F(2) + F(1) = 1 + 1 = 2.\n\n\nExample 3:\n\n\nInput: n = 4\nOutput: 3\nExplanation: F(4) = F(3) + F(2) = 2 + 1 = 3.\n\n\n \nConstraints:\n\n\n\t0 <= n <= 30\n\n",
    template: [
      {
        language: "C++",
        langSlug: "cpp",
        code: "class Solution {\npublic:\n    int fib(int n) {\n        \n    }\n};"
      },
      {
        language: "Java",
        langSlug: "java",
        code: "class Solution {\n    public int fib(int n) {\n        \n    }\n}"
      },
      {
        language: "Python",
        langSlug: "python",
        code: "class Solution(object):\n    def fib(self, n):\n        \"\"\"\n        :type n: int\n        :rtype: int\n        \"\"\"\n        "
      },
      {
        language: "Python3",
        langSlug: "python3",
        code: "class Solution:\n    def fib(self, n: int) -> int:\n        "
      },
      {
        language: "C",
        langSlug: "c",
        code: "\n\nint fib(int n){\n\n}"
      },
      {
        language: "C#",
        langSlug: "csharp",
        code: "public class Solution {\n    public int Fib(int n) {\n        \n    }\n}"
      },
      {
        language: "JavaScript",
        langSlug: "javascript",
        code: "/**\n * @param {number} n\n * @return {number}\n */\nvar fib = function(n) {\n    \n};"
      },
      {
        language: "TypeScript",
        langSlug: "typescript",
        code: "function fib(n: number): number {\n\n};"
      },
      {
        language: "PHP",
        langSlug: "php",
        code: "class Solution {\n\n    /**\n     * @param Integer $n\n     * @return Integer\n     */\n    function fib($n) {\n        \n    }\n}"
      },
      {
        language: "Swift",
        langSlug: "swift",
        code: "class Solution {\n    func fib(_ n: Int) -> Int {\n        \n    }\n}"
      },
      {
        language: "Kotlin",
        langSlug: "kotlin",
        code: "class Solution {\n    fun fib(n: Int): Int {\n        \n    }\n}"
      },
      {
        language: "Go",
        langSlug: "golang",
        code: "func fib(n int) int {\n    \n}"
      },
      {
        language: "Ruby",
        langSlug: "ruby",
        code: "# @param {Integer} n\n# @return {Integer}\ndef fib(n)\n    \nend"
      },
      {
        language: "Scala",
        langSlug: "scala",
        code: "object Solution {\n    def fib(n: Int): Int = {\n        \n    }\n}"
      },
      {
        language: "Rust",
        langSlug: "rust",
        code: "impl Solution {\n    pub fn fib(n: i32) -> i32 {\n        \n    }\n}"
      }
    ]
  },
  {
    title: "Implement Stack using Queues",
    categories: [
      "Stack",
      "Design",
      "Queue"
    ],
    complexity: "Easy",
    deleted: false,
    deletedAt: null,
    description: "Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).\n\nImplement the MyStack class:\n\n\n\tvoid push(int x) Pushes element x to the top of the stack.\n\tint pop() Removes the element on the top of the stack and returns it.\n\tint top() Returns the element on the top of the stack.\n\tboolean empty() Returns true if the stack is empty, false otherwise.\n\n\nNotes:\n\n\n\tYou must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.\n\tDepending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.\n\n\n \nExample 1:\n\n\nInput\n[\"MyStack\", \"push\", \"push\", \"top\", \"pop\", \"empty\"]\n[[], [1], [2], [], [], []]\nOutput\n[null, null, null, 2, 2, false]\n\nExplanation\nMyStack myStack = new MyStack();\nmyStack.push(1);\nmyStack.push(2);\nmyStack.top(); // return 2\nmyStack.pop(); // return 2\nmyStack.empty(); // return False\n\n\n \nConstraints:\n\n\n\t1 <= x <= 9\n\tAt most 100 calls will be made to push, pop, top, and empty.\n\tAll the calls to pop and top are valid.\n\n\n \nFollow-up: Can you implement the stack using only one queue?\n",
    template: [
      {
        language: "C++",
        langSlug: "cpp",
        code: "class MyStack {\npublic:\n    MyStack() {\n        \n    }\n    \n    void push(int x) {\n        \n    }\n    \n    int pop() {\n        \n    }\n    \n    int top() {\n        \n    }\n    \n    bool empty() {\n        \n    }\n};\n\n/**\n * Your MyStack object will be instantiated and called as such:\n * MyStack* obj = new MyStack();\n * obj->push(x);\n * int param_2 = obj->pop();\n * int param_3 = obj->top();\n * bool param_4 = obj->empty();\n */"
      },
      {
        language: "Java",
        langSlug: "java",
        code: "class MyStack {\n\n    public MyStack() {\n        \n    }\n    \n    public void push(int x) {\n        \n    }\n    \n    public int pop() {\n        \n    }\n    \n    public int top() {\n        \n    }\n    \n    public boolean empty() {\n        \n    }\n}\n\n/**\n * Your MyStack object will be instantiated and called as such:\n * MyStack obj = new MyStack();\n * obj.push(x);\n * int param_2 = obj.pop();\n * int param_3 = obj.top();\n * boolean param_4 = obj.empty();\n */"
      },
      {
        language: "Python",
        langSlug: "python",
        code: "class MyStack(object):\n\n    def __init__(self):\n        \n\n    def push(self, x):\n        \"\"\"\n        :type x: int\n        :rtype: None\n        \"\"\"\n        \n\n    def pop(self):\n        \"\"\"\n        :rtype: int\n        \"\"\"\n        \n\n    def top(self):\n        \"\"\"\n        :rtype: int\n        \"\"\"\n        \n\n    def empty(self):\n        \"\"\"\n        :rtype: bool\n        \"\"\"\n        \n\n\n# Your MyStack object will be instantiated and called as such:\n# obj = MyStack()\n# obj.push(x)\n# param_2 = obj.pop()\n# param_3 = obj.top()\n# param_4 = obj.empty()"
      },
      {
        language: "Python3",
        langSlug: "python3",
        code: "class MyStack:\n\n    def __init__(self):\n        \n\n    def push(self, x: int) -> None:\n        \n\n    def pop(self) -> int:\n        \n\n    def top(self) -> int:\n        \n\n    def empty(self) -> bool:\n        \n\n\n# Your MyStack object will be instantiated and called as such:\n# obj = MyStack()\n# obj.push(x)\n# param_2 = obj.pop()\n# param_3 = obj.top()\n# param_4 = obj.empty()"
      },
      {
        language: "C",
        langSlug: "c",
        code: "\n\n\ntypedef struct {\n    \n} MyStack;\n\n\nMyStack* myStackCreate() {\n    \n}\n\nvoid myStackPush(MyStack* obj, int x) {\n  \n}\n\nint myStackPop(MyStack* obj) {\n  \n}\n\nint myStackTop(MyStack* obj) {\n  \n}\n\nbool myStackEmpty(MyStack* obj) {\n  \n}\n\nvoid myStackFree(MyStack* obj) {\n    \n}\n\n/**\n * Your MyStack struct will be instantiated and called as such:\n * MyStack* obj = myStackCreate();\n * myStackPush(obj, x);\n \n * int param_2 = myStackPop(obj);\n \n * int param_3 = myStackTop(obj);\n \n * bool param_4 = myStackEmpty(obj);\n \n * myStackFree(obj);\n*/"
      },
      {
        language: "C#",
        langSlug: "csharp",
        code: "public class MyStack {\n\n    public MyStack() {\n        \n    }\n    \n    public void Push(int x) {\n        \n    }\n    \n    public int Pop() {\n        \n    }\n    \n    public int Top() {\n        \n    }\n    \n    public bool Empty() {\n        \n    }\n}\n\n/**\n * Your MyStack object will be instantiated and called as such:\n * MyStack obj = new MyStack();\n * obj.Push(x);\n * int param_2 = obj.Pop();\n * int param_3 = obj.Top();\n * bool param_4 = obj.Empty();\n */"
      },
      {
        language: "JavaScript",
        langSlug: "javascript",
        code: "\nvar MyStack = function() {\n    \n};\n\n/** \n * @param {number} x\n * @return {void}\n */\nMyStack.prototype.push = function(x) {\n    \n};\n\n/**\n * @return {number}\n */\nMyStack.prototype.pop = function() {\n    \n};\n\n/**\n * @return {number}\n */\nMyStack.prototype.top = function() {\n    \n};\n\n/**\n * @return {boolean}\n */\nMyStack.prototype.empty = function() {\n    \n};\n\n/** \n * Your MyStack object will be instantiated and called as such:\n * var obj = new MyStack()\n * obj.push(x)\n * var param_2 = obj.pop()\n * var param_3 = obj.top()\n * var param_4 = obj.empty()\n */"
      },
      {
        language: "TypeScript",
        langSlug: "typescript",
        code: "class MyStack {\n    constructor() {\n\n    }\n\n    push(x: number): void {\n\n    }\n\n    pop(): number {\n\n    }\n\n    top(): number {\n\n    }\n\n    empty(): boolean {\n\n    }\n}\n\n/**\n * Your MyStack object will be instantiated and called as such:\n * var obj = new MyStack()\n * obj.push(x)\n * var param_2 = obj.pop()\n * var param_3 = obj.top()\n * var param_4 = obj.empty()\n */"
      },
      {
        language: "PHP",
        langSlug: "php",
        code: "class MyStack {\n    /**\n     */\n    function __construct() {\n        \n    }\n  \n    /**\n     * @param Integer $x\n     * @return NULL\n     */\n    function push($x) {\n        \n    }\n  \n    /**\n     * @return Integer\n     */\n    function pop() {\n        \n    }\n  \n    /**\n     * @return Integer\n     */\n    function top() {\n        \n    }\n  \n    /**\n     * @return Boolean\n     */\n    function empty() {\n        \n    }\n}\n\n/**\n * Your MyStack object will be instantiated and called as such:\n * $obj = MyStack();\n * $obj->push($x);\n * $ret_2 = $obj->pop();\n * $ret_3 = $obj->top();\n * $ret_4 = $obj->empty();\n */"
      },
      {
        language: "Swift",
        langSlug: "swift",
        code: "\nclass MyStack {\n\n    init() {\n        \n    }\n    \n    func push(_ x: Int) {\n        \n    }\n    \n    func pop() -> Int {\n        \n    }\n    \n    func top() -> Int {\n        \n    }\n    \n    func empty() -> Bool {\n        \n    }\n}\n\n/**\n * Your MyStack object will be instantiated and called as such:\n * let obj = MyStack()\n * obj.push(x)\n * let ret_2: Int = obj.pop()\n * let ret_3: Int = obj.top()\n * let ret_4: Bool = obj.empty()\n */"
      },
      {
        language: "Kotlin",
        langSlug: "kotlin",
        code: "class MyStack() {\n\n    fun push(x: Int) {\n        \n    }\n\n    fun pop(): Int {\n        \n    }\n\n    fun top(): Int {\n        \n    }\n\n    fun empty(): Boolean {\n        \n    }\n\n}\n\n/**\n * Your MyStack object will be instantiated and called as such:\n * var obj = MyStack()\n * obj.push(x)\n * var param_2 = obj.pop()\n * var param_3 = obj.top()\n * var param_4 = obj.empty()\n */"
      },
      {
        language: "Dart",
        langSlug: "dart",
        code: "class MyStack {\n\n  MyStack() {\n\n  }\n  \n  void push(int x) {\n\n  }\n  \n  int pop() {\n\n  }\n  \n  int top() {\n\n  }\n  \n  bool empty() {\n\n  }\n}\n\n/**\n * Your MyStack object will be instantiated and called as such:\n * MyStack obj = MyStack();\n * obj.push(x);\n * int param2 = obj.pop();\n * int param3 = obj.top();\n * bool param4 = obj.empty();\n */"
      },
      {
        language: "Go",
        langSlug: "golang",
        code: "type MyStack struct {\n    \n}\n\n\nfunc Constructor() MyStack {\n    \n}\n\n\nfunc (this *MyStack) Push(x int)  {\n    \n}\n\n\nfunc (this *MyStack) Pop() int {\n    \n}\n\n\nfunc (this *MyStack) Top() int {\n    \n}\n\n\nfunc (this *MyStack) Empty() bool {\n    \n}\n\n\n/**\n * Your MyStack object will be instantiated and called as such:\n * obj := Constructor();\n * obj.Push(x);\n * param_2 := obj.Pop();\n * param_3 := obj.Top();\n * param_4 := obj.Empty();\n */"
      },
      {
        language: "Ruby",
        langSlug: "ruby",
        code: "class MyStack\n    def initialize()\n        \n    end\n\n\n=begin\n    :type x: Integer\n    :rtype: Void\n=end\n    def push(x)\n        \n    end\n\n\n=begin\n    :rtype: Integer\n=end\n    def pop()\n        \n    end\n\n\n=begin\n    :rtype: Integer\n=end\n    def top()\n        \n    end\n\n\n=begin\n    :rtype: Boolean\n=end\n    def empty()\n        \n    end\n\n\nend\n\n# Your MyStack object will be instantiated and called as such:\n# obj = MyStack.new()\n# obj.push(x)\n# param_2 = obj.pop()\n# param_3 = obj.top()\n# param_4 = obj.empty()"
      },
      {
        language: "Scala",
        langSlug: "scala",
        code: "class MyStack() {\n\n    def push(x: Int) {\n        \n    }\n\n    def pop(): Int = {\n        \n    }\n\n    def top(): Int = {\n        \n    }\n\n    def empty(): Boolean = {\n        \n    }\n\n}\n\n/**\n * Your MyStack object will be instantiated and called as such:\n * var obj = new MyStack()\n * obj.push(x)\n * var param_2 = obj.pop()\n * var param_3 = obj.top()\n * var param_4 = obj.empty()\n */"
      },
      {
        language: "Rust",
        langSlug: "rust",
        code: "struct MyStack {\n\n}\n\n\n/** \n * `&self` means the method takes an immutable reference.\n * If you need a mutable reference, change it to `&mut self` instead.\n */\nimpl MyStack {\n\n    fn new() -> Self {\n        \n    }\n    \n    fn push(&self, x: i32) {\n        \n    }\n    \n    fn pop(&self) -> i32 {\n        \n    }\n    \n    fn top(&self) -> i32 {\n        \n    }\n    \n    fn empty(&self) -> bool {\n        \n    }\n}\n\n/**\n * Your MyStack object will be instantiated and called as such:\n * let obj = MyStack::new();\n * obj.push(x);\n * let ret_2: i32 = obj.pop();\n * let ret_3: i32 = obj.top();\n * let ret_4: bool = obj.empty();\n */"
      },
      {
        language: "Racket",
        langSlug: "racket",
        code: "(define my-stack%\n  (class object%\n    (super-new)\n    (init-field)\n    \n    ; push : exact-integer? -> void?\n    (define/public (push x)\n\n      )\n    ; pop : -> exact-integer?\n    (define/public (pop)\n\n      )\n    ; top : -> exact-integer?\n    (define/public (top)\n\n      )\n    ; empty : -> boolean?\n    (define/public (empty)\n\n      )))\n\n;; Your my-stack% object will be instantiated and called as such:\n;; (define obj (new my-stack%))\n;; (send obj push x)\n;; (define param_2 (send obj pop))\n;; (define param_3 (send obj top))\n;; (define param_4 (send obj empty))"
      },
      {
        language: "Erlang",
        langSlug: "erlang",
        code: "-spec my_stack_init_() -> any().\nmy_stack_init_() ->\n  .\n\n-spec my_stack_push(X :: integer()) -> any().\nmy_stack_push(X) ->\n  .\n\n-spec my_stack_pop() -> integer().\nmy_stack_pop() ->\n  .\n\n-spec my_stack_top() -> integer().\nmy_stack_top() ->\n  .\n\n-spec my_stack_empty() -> boolean().\nmy_stack_empty() ->\n  .\n\n\n%% Your functions will be called as such:\n%% my_stack_init_(),\n%% my_stack_push(X),\n%% Param_2 = my_stack_pop(),\n%% Param_3 = my_stack_top(),\n%% Param_4 = my_stack_empty(),\n\n%% my_stack_init_ will be called before every test case, in which you can do some necessary initializations."
      },
      {
        language: "Elixir",
        langSlug: "elixir",
        code: "defmodule MyStack do\n  @spec init_() :: any\n  def init_() do\n\n  end\n\n  @spec push(x :: integer) :: any\n  def push(x) do\n\n  end\n\n  @spec pop() :: integer\n  def pop() do\n\n  end\n\n  @spec top() :: integer\n  def top() do\n\n  end\n\n  @spec empty() :: boolean\n  def empty() do\n\n  end\nend\n\n# Your functions will be called as such:\n# MyStack.init_()\n# MyStack.push(x)\n# param_2 = MyStack.pop()\n# param_3 = MyStack.top()\n# param_4 = MyStack.empty()\n\n# MyStack.init_ will be called before every test case, in which you can do some necessary initializations."
      }
    ]
  },
  {
    title: "Repeated DNA Sequences",
    categories: [
      "Hash Table",
      "String",
      "Bit Manipulation",
      "Sliding Window",
      "Rolling Hash",
      "Hash Function"
    ],
    complexity: "Medium",
    deleted: false,
    deletedAt: null,
    description: "The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.\n\n\n\tFor example, \"ACGAATTCCG\" is a DNA sequence.\n\n\nWhen studying DNA, it is useful to identify repeated sequences within the DNA.\n\nGiven a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.\n\n \nExample 1:\nInput: s = \"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT\"\nOutput: [\"AAAAACCCCC\",\"CCCCCAAAAA\"]\nExample 2:\nInput: s = \"AAAAAAAAAAAAA\"\nOutput: [\"AAAAAAAAAA\"]\n\n \nConstraints:\n\n\n\t1 <= s.length <= 105\n\ts[i] is either 'A', 'C', 'G', or 'T'.\n\n",
    template: [
      {
        language: "C++",
        langSlug: "cpp",
        code: "class Solution {\npublic:\n    vector<string> findRepeatedDnaSequences(string s) {\n        \n    }\n};"
      },
      {
        language: "Java",
        langSlug: "java",
        code: "class Solution {\n    public List<String> findRepeatedDnaSequences(String s) {\n        \n    }\n}"
      },
      {
        language: "Python",
        langSlug: "python",
        code: "class Solution(object):\n    def findRepeatedDnaSequences(self, s):\n        \"\"\"\n        :type s: str\n        :rtype: List[str]\n        \"\"\"\n        "
      },
      {
        language: "Python3",
        langSlug: "python3",
        code: "class Solution:\n    def findRepeatedDnaSequences(self, s: str) -> List[str]:\n        "
      },
      {
        language: "C",
        langSlug: "c",
        code: "/**\n * Note: The returned array must be malloced, assume caller calls free().\n */\nchar ** findRepeatedDnaSequences(char * s, int* returnSize){\n\n}"
      },
      {
        language: "C#",
        langSlug: "csharp",
        code: "public class Solution {\n    public IList<string> FindRepeatedDnaSequences(string s) {\n        \n    }\n}"
      },
      {
        language: "JavaScript",
        langSlug: "javascript",
        code: "/**\n * @param {string} s\n * @return {string[]}\n */\nvar findRepeatedDnaSequences = function(s) {\n    \n};"
      },
      {
        language: "TypeScript",
        langSlug: "typescript",
        code: "function findRepeatedDnaSequences(s: string): string[] {\n\n};"
      },
      {
        language: "PHP",
        langSlug: "php",
        code: "class Solution {\n\n    /**\n     * @param String $s\n     * @return String[]\n     */\n    function findRepeatedDnaSequences($s) {\n        \n    }\n}"
      },
      {
        language: "Swift",
        langSlug: "swift",
        code: "class Solution {\n    func findRepeatedDnaSequences(_ s: String) -> [String] {\n        \n    }\n}"
      },
      {
        language: "Kotlin",
        langSlug: "kotlin",
        code: "class Solution {\n    fun findRepeatedDnaSequences(s: String): List<String> {\n        \n    }\n}"
      },
      {
        language: "Dart",
        langSlug: "dart",
        code: "class Solution {\n  List<String> findRepeatedDnaSequences(String s) {\n\n  }\n}"
      },
      {
        language: "Go",
        langSlug: "golang",
        code: "func findRepeatedDnaSequences(s string) []string {\n    \n}"
      },
      {
        language: "Ruby",
        langSlug: "ruby",
        code: "# @param {String} s\n# @return {String[]}\ndef find_repeated_dna_sequences(s)\n    \nend"
      },
      {
        language: "Scala",
        langSlug: "scala",
        code: "object Solution {\n    def findRepeatedDnaSequences(s: String): List[String] = {\n        \n    }\n}"
      },
      {
        language: "Rust",
        langSlug: "rust",
        code: "impl Solution {\n    pub fn find_repeated_dna_sequences(s: String) -> Vec<String> {\n        \n    }\n}"
      },
      {
        language: "Racket",
        langSlug: "racket",
        code: "(define/contract (find-repeated-dna-sequences s)\n  (-> string? (listof string?))\n\n  )"
      },
      {
        language: "Erlang",
        langSlug: "erlang",
        code: "-spec find_repeated_dna_sequences(S :: unicode:unicode_binary()) -> [unicode:unicode_binary()].\nfind_repeated_dna_sequences(S) ->\n  ."
      },
      {
        language: "Elixir",
        langSlug: "elixir",
        code: "defmodule Solution do\n  @spec find_repeated_dna_sequences(s :: String.t) :: [String.t]\n  def find_repeated_dna_sequences(s) do\n\n  end\nend"
      }
    ]
  },
  {
    title: "Course Schedule",
    categories: [
      "Depth-First Search",
      "Breadth-First Search",
      "Graph",
      "Topological Sort"
    ],
    complexity: "Medium",
    deleted: false,
    deletedAt: null,
    description: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.\n\n\n\tFor example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.\n\n\nReturn true if you can finish all courses. Otherwise, return false.\n\n \nExample 1:\n\n\nInput: numCourses = 2, prerequisites = [[1,0]]\nOutput: true\nExplanation: There are a total of 2 courses to take. \nTo take course 1 you should have finished course 0. So it is possible.\n\n\nExample 2:\n\n\nInput: numCourses = 2, prerequisites = [[1,0],[0,1]]\nOutput: false\nExplanation: There are a total of 2 courses to take. \nTo take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.\n\n\n \nConstraints:\n\n\n\t1 <= numCourses <= 2000\n\t0 <= prerequisites.length <= 5000\n\tprerequisites[i].length == 2\n\t0 <= ai, bi < numCourses\n\tAll the pairs prerequisites[i] are unique.\n\n",
    template: [
      {
        language: "C++",
        langSlug: "cpp",
        code: "class Solution {\npublic:\n    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n        \n    }\n};"
      },
      {
        language: "Java",
        langSlug: "java",
        code: "class Solution {\n    public boolean canFinish(int numCourses, int[][] prerequisites) {\n        \n    }\n}"
      },
      {
        language: "Python",
        langSlug: "python",
        code: "class Solution(object):\n    def canFinish(self, numCourses, prerequisites):\n        \"\"\"\n        :type numCourses: int\n        :type prerequisites: List[List[int]]\n        :rtype: bool\n        \"\"\"\n        "
      },
      {
        language: "Python3",
        langSlug: "python3",
        code: "class Solution:\n    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:\n        "
      },
      {
        language: "C",
        langSlug: "c",
        code: "bool canFinish(int numCourses, int** prerequisites, int prerequisitesSize, int* prerequisitesColSize){\n\n}"
      },
      {
        language: "C#",
        langSlug: "csharp",
        code: "public class Solution {\n    public bool CanFinish(int numCourses, int[][] prerequisites) {\n        \n    }\n}"
      },
      {
        language: "JavaScript",
        langSlug: "javascript",
        code: "/**\n * @param {number} numCourses\n * @param {number[][]} prerequisites\n * @return {boolean}\n */\nvar canFinish = function(numCourses, prerequisites) {\n    \n};"
      },
      {
        language: "TypeScript",
        langSlug: "typescript",
        code: "function canFinish(numCourses: number, prerequisites: number[][]): boolean {\n\n};"
      },
      {
        language: "PHP",
        langSlug: "php",
        code: "class Solution {\n\n    /**\n     * @param Integer $numCourses\n     * @param Integer[][] $prerequisites\n     * @return Boolean\n     */\n    function canFinish($numCourses, $prerequisites) {\n        \n    }\n}"
      },
      {
        language: "Swift",
        langSlug: "swift",
        code: "class Solution {\n    func canFinish(_ numCourses: Int, _ prerequisites: [[Int]]) -> Bool {\n        \n    }\n}"
      },
      {
        language: "Kotlin",
        langSlug: "kotlin",
        code: "class Solution {\n    fun canFinish(numCourses: Int, prerequisites: Array<IntArray>): Boolean {\n        \n    }\n}"
      },
      {
        language: "Dart",
        langSlug: "dart",
        code: "class Solution {\n  bool canFinish(int numCourses, List<List<int>> prerequisites) {\n\n  }\n}"
      },
      {
        language: "Go",
        langSlug: "golang",
        code: "func canFinish(numCourses int, prerequisites [][]int) bool {\n    \n}"
      },
      {
        language: "Ruby",
        langSlug: "ruby",
        code: "# @param {Integer} num_courses\n# @param {Integer[][]} prerequisites\n# @return {Boolean}\ndef can_finish(num_courses, prerequisites)\n    \nend"
      },
      {
        language: "Scala",
        langSlug: "scala",
        code: "object Solution {\n    def canFinish(numCourses: Int, prerequisites: Array[Array[Int]]): Boolean = {\n        \n    }\n}"
      },
      {
        language: "Rust",
        langSlug: "rust",
        code: "impl Solution {\n    pub fn can_finish(num_courses: i32, prerequisites: Vec<Vec<i32>>) -> bool {\n        \n    }\n}"
      },
      {
        language: "Racket",
        langSlug: "racket",
        code: "(define/contract (can-finish numCourses prerequisites)\n  (-> exact-integer? (listof (listof exact-integer?)) boolean?)\n\n  )"
      },
      {
        language: "Erlang",
        langSlug: "erlang",
        code: "-spec can_finish(NumCourses :: integer(), Prerequisites :: [[integer()]]) -> boolean().\ncan_finish(NumCourses, Prerequisites) ->\n  ."
      },
      {
        language: "Elixir",
        langSlug: "elixir",
        code: "defmodule Solution do\n  @spec can_finish(num_courses :: integer, prerequisites :: [[integer]]) :: boolean\n  def can_finish(num_courses, prerequisites) do\n\n  end\nend"
      }
    ]
  },
  {
    title: "LRU Cache",
    categories: [
      "Hash Table",
      "Linked List",
      "Design",
      "Doubly-Linked List"
    ],
    complexity: "Medium",
    deleted: false,
    deletedAt: null,
    description: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.\n\nImplement the LRUCache class:\n\n\n\tLRUCache(int capacity) Initialize the LRU cache with positive size capacity.\n\tint get(int key) Return the value of the key if the key exists, otherwise return -1.\n\tvoid put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.\n\n\nThe functions get and put must each run in O(1) average time complexity.\n\n \nExample 1:\n\n\nInput\n[\"LRUCache\", \"put\", \"put\", \"get\", \"put\", \"get\", \"put\", \"get\", \"get\", \"get\"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]\nOutput\n[null, null, null, 1, null, -1, null, -1, 3, 4]\n\nExplanation\nLRUCache lRUCache = new LRUCache(2);\nlRUCache.put(1, 1); // cache is {1=1}\nlRUCache.put(2, 2); // cache is {1=1, 2=2}\nlRUCache.get(1);    // return 1\nlRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}\nlRUCache.get(2);    // returns -1 (not found)\nlRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}\nlRUCache.get(1);    // return -1 (not found)\nlRUCache.get(3);    // return 3\nlRUCache.get(4);    // return 4\n\n\n \nConstraints:\n\n\n\t1 <= capacity <= 3000\n\t0 <= key <= 104\n\t0 <= value <= 105\n\tAt most 2 * 105 calls will be made to get and put.\n\n",
    template: [
      {
        language: "C++",
        langSlug: "cpp",
        code: "class LRUCache {\npublic:\n    LRUCache(int capacity) {\n        \n    }\n    \n    int get(int key) {\n        \n    }\n    \n    void put(int key, int value) {\n        \n    }\n};\n\n/**\n * Your LRUCache object will be instantiated and called as such:\n * LRUCache* obj = new LRUCache(capacity);\n * int param_1 = obj->get(key);\n * obj->put(key,value);\n */"
      },
      {
        language: "Java",
        langSlug: "java",
        code: "class LRUCache {\n\n    public LRUCache(int capacity) {\n        \n    }\n    \n    public int get(int key) {\n        \n    }\n    \n    public void put(int key, int value) {\n        \n    }\n}\n\n/**\n * Your LRUCache object will be instantiated and called as such:\n * LRUCache obj = new LRUCache(capacity);\n * int param_1 = obj.get(key);\n * obj.put(key,value);\n */"
      },
      {
        language: "Python",
        langSlug: "python",
        code: "class LRUCache(object):\n\n    def __init__(self, capacity):\n        \"\"\"\n        :type capacity: int\n        \"\"\"\n        \n\n    def get(self, key):\n        \"\"\"\n        :type key: int\n        :rtype: int\n        \"\"\"\n        \n\n    def put(self, key, value):\n        \"\"\"\n        :type key: int\n        :type value: int\n        :rtype: None\n        \"\"\"\n        \n\n\n# Your LRUCache object will be instantiated and called as such:\n# obj = LRUCache(capacity)\n# param_1 = obj.get(key)\n# obj.put(key,value)"
      },
      {
        language: "Python3",
        langSlug: "python3",
        code: "class LRUCache:\n\n    def __init__(self, capacity: int):\n        \n\n    def get(self, key: int) -> int:\n        \n\n    def put(self, key: int, value: int) -> None:\n        \n\n\n# Your LRUCache object will be instantiated and called as such:\n# obj = LRUCache(capacity)\n# param_1 = obj.get(key)\n# obj.put(key,value)"
      },
      {
        language: "C",
        langSlug: "c",
        code: "\n\n\ntypedef struct {\n    \n} LRUCache;\n\n\nLRUCache* lRUCacheCreate(int capacity) {\n    \n}\n\nint lRUCacheGet(LRUCache* obj, int key) {\n  \n}\n\nvoid lRUCachePut(LRUCache* obj, int key, int value) {\n  \n}\n\nvoid lRUCacheFree(LRUCache* obj) {\n    \n}\n\n/**\n * Your LRUCache struct will be instantiated and called as such:\n * LRUCache* obj = lRUCacheCreate(capacity);\n * int param_1 = lRUCacheGet(obj, key);\n \n * lRUCachePut(obj, key, value);\n \n * lRUCacheFree(obj);\n*/"
      },
      {
        language: "C#",
        langSlug: "csharp",
        code: "public class LRUCache {\n\n    public LRUCache(int capacity) {\n        \n    }\n    \n    public int Get(int key) {\n        \n    }\n    \n    public void Put(int key, int value) {\n        \n    }\n}\n\n/**\n * Your LRUCache object will be instantiated and called as such:\n * LRUCache obj = new LRUCache(capacity);\n * int param_1 = obj.Get(key);\n * obj.Put(key,value);\n */"
      },
      {
        language: "JavaScript",
        langSlug: "javascript",
        code: "/**\n * @param {number} capacity\n */\nvar LRUCache = function(capacity) {\n    \n};\n\n/** \n * @param {number} key\n * @return {number}\n */\nLRUCache.prototype.get = function(key) {\n    \n};\n\n/** \n * @param {number} key \n * @param {number} value\n * @return {void}\n */\nLRUCache.prototype.put = function(key, value) {\n    \n};\n\n/** \n * Your LRUCache object will be instantiated and called as such:\n * var obj = new LRUCache(capacity)\n * var param_1 = obj.get(key)\n * obj.put(key,value)\n */"
      },
      {
        language: "TypeScript",
        langSlug: "typescript",
        code: "class LRUCache {\n    constructor(capacity: number) {\n\n    }\n\n    get(key: number): number {\n\n    }\n\n    put(key: number, value: number): void {\n\n    }\n}\n\n/**\n * Your LRUCache object will be instantiated and called as such:\n * var obj = new LRUCache(capacity)\n * var param_1 = obj.get(key)\n * obj.put(key,value)\n */"
      },
      {
        language: "PHP",
        langSlug: "php",
        code: "class LRUCache {\n    /**\n     * @param Integer $capacity\n     */\n    function __construct($capacity) {\n        \n    }\n  \n    /**\n     * @param Integer $key\n     * @return Integer\n     */\n    function get($key) {\n        \n    }\n  \n    /**\n     * @param Integer $key\n     * @param Integer $value\n     * @return NULL\n     */\n    function put($key, $value) {\n        \n    }\n}\n\n/**\n * Your LRUCache object will be instantiated and called as such:\n * $obj = LRUCache($capacity);\n * $ret_1 = $obj->get($key);\n * $obj->put($key, $value);\n */"
      },
      {
        language: "Swift",
        langSlug: "swift",
        code: "\nclass LRUCache {\n\n    init(_ capacity: Int) {\n        \n    }\n    \n    func get(_ key: Int) -> Int {\n        \n    }\n    \n    func put(_ key: Int, _ value: Int) {\n        \n    }\n}\n\n/**\n * Your LRUCache object will be instantiated and called as such:\n * let obj = LRUCache(capacity)\n * let ret_1: Int = obj.get(key)\n * obj.put(key, value)\n */"
      },
      {
        language: "Kotlin",
        langSlug: "kotlin",
        code: "class LRUCache(capacity: Int) {\n\n    fun get(key: Int): Int {\n        \n    }\n\n    fun put(key: Int, value: Int) {\n        \n    }\n\n}\n\n/**\n * Your LRUCache object will be instantiated and called as such:\n * var obj = LRUCache(capacity)\n * var param_1 = obj.get(key)\n * obj.put(key,value)\n */"
      },
      {
        language: "Dart",
        langSlug: "dart",
        code: "class LRUCache {\n\n  LRUCache(int capacity) {\n\n  }\n  \n  int get(int key) {\n\n  }\n  \n  void put(int key, int value) {\n\n  }\n}\n\n/**\n * Your LRUCache object will be instantiated and called as such:\n * LRUCache obj = LRUCache(capacity);\n * int param1 = obj.get(key);\n * obj.put(key,value);\n */"
      },
      {
        language: "Go",
        langSlug: "golang",
        code: "type LRUCache struct {\n    \n}\n\n\nfunc Constructor(capacity int) LRUCache {\n    \n}\n\n\nfunc (this *LRUCache) Get(key int) int {\n    \n}\n\n\nfunc (this *LRUCache) Put(key int, value int)  {\n    \n}\n\n\n/**\n * Your LRUCache object will be instantiated and called as such:\n * obj := Constructor(capacity);\n * param_1 := obj.Get(key);\n * obj.Put(key,value);\n */"
      },
      {
        language: "Ruby",
        langSlug: "ruby",
        code: "class LRUCache\n\n=begin\n    :type capacity: Integer\n=end\n    def initialize(capacity)\n        \n    end\n\n\n=begin\n    :type key: Integer\n    :rtype: Integer\n=end\n    def get(key)\n        \n    end\n\n\n=begin\n    :type key: Integer\n    :type value: Integer\n    :rtype: Void\n=end\n    def put(key, value)\n        \n    end\n\n\nend\n\n# Your LRUCache object will be instantiated and called as such:\n# obj = LRUCache.new(capacity)\n# param_1 = obj.get(key)\n# obj.put(key, value)"
      },
      {
        language: "Scala",
        langSlug: "scala",
        code: "class LRUCache(_capacity: Int) {\n\n    def get(key: Int): Int = {\n        \n    }\n\n    def put(key: Int, value: Int) {\n        \n    }\n\n}\n\n/**\n * Your LRUCache object will be instantiated and called as such:\n * var obj = new LRUCache(capacity)\n * var param_1 = obj.get(key)\n * obj.put(key,value)\n */"
      },
      {
        language: "Rust",
        langSlug: "rust",
        code: "struct LRUCache {\n\n}\n\n\n/** \n * `&self` means the method takes an immutable reference.\n * If you need a mutable reference, change it to `&mut self` instead.\n */\nimpl LRUCache {\n\n    fn new(capacity: i32) -> Self {\n        \n    }\n    \n    fn get(&self, key: i32) -> i32 {\n        \n    }\n    \n    fn put(&self, key: i32, value: i32) {\n        \n    }\n}\n\n/**\n * Your LRUCache object will be instantiated and called as such:\n * let obj = LRUCache::new(capacity);\n * let ret_1: i32 = obj.get(key);\n * obj.put(key, value);\n */"
      },
      {
        language: "Racket",
        langSlug: "racket",
        code: "(define lru-cache%\n  (class object%\n    (super-new)\n\n    ; capacity : exact-integer?\n    (init-field\n      capacity)\n    \n    ; get : exact-integer? -> exact-integer?\n    (define/public (get key)\n\n      )\n    ; put : exact-integer? exact-integer? -> void?\n    (define/public (put key value)\n\n      )))\n\n;; Your lru-cache% object will be instantiated and called as such:\n;; (define obj (new lru-cache% [capacity capacity]))\n;; (define param_1 (send obj get key))\n;; (send obj put key value)"
      },
      {
        language: "Erlang",
        langSlug: "erlang",
        code: "-spec lru_cache_init_(Capacity :: integer()) -> any().\nlru_cache_init_(Capacity) ->\n  .\n\n-spec lru_cache_get(Key :: integer()) -> integer().\nlru_cache_get(Key) ->\n  .\n\n-spec lru_cache_put(Key :: integer(), Value :: integer()) -> any().\nlru_cache_put(Key, Value) ->\n  .\n\n\n%% Your functions will be called as such:\n%% lru_cache_init_(Capacity),\n%% Param_1 = lru_cache_get(Key),\n%% lru_cache_put(Key, Value),\n\n%% lru_cache_init_ will be called before every test case, in which you can do some necessary initializations."
      },
      {
        language: "Elixir",
        langSlug: "elixir",
        code: "defmodule LRUCache do\n  @spec init_(capacity :: integer) :: any\n  def init_(capacity) do\n\n  end\n\n  @spec get(key :: integer) :: integer\n  def get(key) do\n\n  end\n\n  @spec put(key :: integer, value :: integer) :: any\n  def put(key, value) do\n\n  end\nend\n\n# Your functions will be called as such:\n# LRUCache.init_(capacity)\n# param_1 = LRUCache.get(key)\n# LRUCache.put(key, value)\n\n# LRUCache.init_ will be called before every test case, in which you can do some necessary initializations."
      }
    ]
  },
  {
    title: "Longest Palindromic Substring",
    categories: [
      "String",
      "Dynamic Programming"
    ],
    complexity: "Medium",
    deleted: false,
    deletedAt: null,
    description: "Given a string s, return the longest palindromic substring in s.\n\n \nExample 1:\n\n\nInput: s = \"babad\"\nOutput: \"bab\"\nExplanation: \"aba\" is also a valid answer.\n\n\nExample 2:\n\n\nInput: s = \"cbbd\"\nOutput: \"bb\"\n\n\n \nConstraints:\n\n\n\t1 <= s.length <= 1000\n\ts consist of only digits and English letters.\n\n",
    template: [
      {
        language: "C++",
        langSlug: "cpp",
        code: "class Solution {\npublic:\n    string longestPalindrome(string s) {\n        \n    }\n};"
      },
      {
        language: "Java",
        langSlug: "java",
        code: "class Solution {\n    public String longestPalindrome(String s) {\n        \n    }\n}"
      },
      {
        language: "Python",
        langSlug: "python",
        code: "class Solution(object):\n    def longestPalindrome(self, s):\n        \"\"\"\n        :type s: str\n        :rtype: str\n        \"\"\"\n        "
      },
      {
        language: "Python3",
        langSlug: "python3",
        code: "class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        "
      },
      {
        language: "C",
        langSlug: "c",
        code: "char * longestPalindrome(char * s){\n\n}"
      },
      {
        language: "C#",
        langSlug: "csharp",
        code: "public class Solution {\n    public string LongestPalindrome(string s) {\n        \n    }\n}"
      },
      {
        language: "JavaScript",
        langSlug: "javascript",
        code: "/**\n * @param {string} s\n * @return {string}\n */\nvar longestPalindrome = function(s) {\n    \n};"
      },
      {
        language: "TypeScript",
        langSlug: "typescript",
        code: "function longestPalindrome(s: string): string {\n\n};"
      },
      {
        language: "PHP",
        langSlug: "php",
        code: "class Solution {\n\n    /**\n     * @param String $s\n     * @return String\n     */\n    function longestPalindrome($s) {\n        \n    }\n}"
      },
      {
        language: "Swift",
        langSlug: "swift",
        code: "class Solution {\n    func longestPalindrome(_ s: String) -> String {\n        \n    }\n}"
      },
      {
        language: "Kotlin",
        langSlug: "kotlin",
        code: "class Solution {\n    fun longestPalindrome(s: String): String {\n        \n    }\n}"
      },
      {
        language: "Dart",
        langSlug: "dart",
        code: "class Solution {\n  String longestPalindrome(String s) {\n\n  }\n}"
      },
      {
        language: "Go",
        langSlug: "golang",
        code: "func longestPalindrome(s string) string {\n    \n}"
      },
      {
        language: "Ruby",
        langSlug: "ruby",
        code: "# @param {String} s\n# @return {String}\ndef longest_palindrome(s)\n    \nend"
      },
      {
        language: "Scala",
        langSlug: "scala",
        code: "object Solution {\n    def longestPalindrome(s: String): String = {\n        \n    }\n}"
      },
      {
        language: "Rust",
        langSlug: "rust",
        code: "impl Solution {\n    pub fn longest_palindrome(s: String) -> String {\n        \n    }\n}"
      },
      {
        language: "Racket",
        langSlug: "racket",
        code: "(define/contract (longest-palindrome s)\n  (-> string? string?)\n\n  )"
      },
      {
        language: "Erlang",
        langSlug: "erlang",
        code: "-spec longest_palindrome(S :: unicode:unicode_binary()) -> unicode:unicode_binary().\nlongest_palindrome(S) ->\n  ."
      },
      {
        language: "Elixir",
        langSlug: "elixir",
        code: "defmodule Solution do\n  @spec longest_palindrome(s :: String.t) :: String.t\n  def longest_palindrome(s) do\n\n  end\nend"
      }
    ]
  },
  {
    title: "Longest Substring Without Repeating Characters",
    categories: [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    complexity: "Medium",
    deleted: false,
    deletedAt: null,
    description: "Given a string s, find the length of the longest substring without repeating characters.\n\n \nExample 1:\n\n\nInput: s = \"abcabcbb\"\nOutput: 3\nExplanation: The answer is \"abc\", with the length of 3.\n\n\nExample 2:\n\n\nInput: s = \"bbbbb\"\nOutput: 1\nExplanation: The answer is \"b\", with the length of 1.\n\n\nExample 3:\n\n\nInput: s = \"pwwkew\"\nOutput: 3\nExplanation: The answer is \"wke\", with the length of 3.\nNotice that the answer must be a substring, \"pwke\" is a subsequence and not a substring.\n\n\n \nConstraints:\n\n\n\t0 <= s.length <= 5 * 104\n\ts consists of English letters, digits, symbols and spaces.\n\n",
    template: [
      {
        language: "C++",
        langSlug: "cpp",
        code: "class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        \n    }\n};"
      },
      {
        language: "Java",
        langSlug: "java",
        code: "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        \n    }\n}"
      },
      {
        language: "Python",
        langSlug: "python",
        code: "class Solution(object):\n    def lengthOfLongestSubstring(self, s):\n        \"\"\"\n        :type s: str\n        :rtype: int\n        \"\"\"\n        "
      },
      {
        language: "Python3",
        langSlug: "python3",
        code: "class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        "
      },
      {
        language: "C",
        langSlug: "c",
        code: "int lengthOfLongestSubstring(char * s){\n\n}"
      },
      {
        language: "C#",
        langSlug: "csharp",
        code: "public class Solution {\n    public int LengthOfLongestSubstring(string s) {\n        \n    }\n}"
      },
      {
        language: "JavaScript",
        langSlug: "javascript",
        code: "/**\n * @param {string} s\n * @return {number}\n */\nvar lengthOfLongestSubstring = function(s) {\n    \n};"
      },
      {
        language: "TypeScript",
        langSlug: "typescript",
        code: "function lengthOfLongestSubstring(s: string): number {\n\n};"
      },
      {
        language: "PHP",
        langSlug: "php",
        code: "class Solution {\n\n    /**\n     * @param String $s\n     * @return Integer\n     */\n    function lengthOfLongestSubstring($s) {\n        \n    }\n}"
      },
      {
        language: "Swift",
        langSlug: "swift",
        code: "class Solution {\n    func lengthOfLongestSubstring(_ s: String) -> Int {\n        \n    }\n}"
      },
      {
        language: "Kotlin",
        langSlug: "kotlin",
        code: "class Solution {\n    fun lengthOfLongestSubstring(s: String): Int {\n        \n    }\n}"
      },
      {
        language: "Dart",
        langSlug: "dart",
        code: "class Solution {\n  int lengthOfLongestSubstring(String s) {\n\n  }\n}"
      },
      {
        language: "Go",
        langSlug: "golang",
        code: "func lengthOfLongestSubstring(s string) int {\n    \n}"
      },
      {
        language: "Ruby",
        langSlug: "ruby",
        code: "# @param {String} s\n# @return {Integer}\ndef length_of_longest_substring(s)\n    \nend"
      },
      {
        language: "Scala",
        langSlug: "scala",
        code: "object Solution {\n    def lengthOfLongestSubstring(s: String): Int = {\n        \n    }\n}"
      },
      {
        language: "Rust",
        langSlug: "rust",
        code: "impl Solution {\n    pub fn length_of_longest_substring(s: String) -> i32 {\n        \n    }\n}"
      },
      {
        language: "Racket",
        langSlug: "racket",
        code: "(define/contract (length-of-longest-substring s)\n  (-> string? exact-integer?)\n\n  )"
      },
      {
        language: "Erlang",
        langSlug: "erlang",
        code: "-spec length_of_longest_substring(S :: unicode:unicode_binary()) -> integer().\nlength_of_longest_substring(S) ->\n  ."
      },
      {
        language: "Elixir",
        langSlug: "elixir",
        code: "defmodule Solution do\n  @spec length_of_longest_substring(s :: String.t) :: integer\n  def length_of_longest_substring(s) do\n\n  end\nend"
      }
    ]
  },
  {
    title: "Longest Common Subsequence",
    categories: [
      "String",
      "Dynamic Programming"
    ],
    complexity: "Medium",
    deleted: false,
    deletedAt: null,
    description: "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.\n\nA subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.\n\n\n\tFor example, \"ace\" is a subsequence of \"abcde\".\n\n\nA common subsequence of two strings is a subsequence that is common to both strings.\n\n \nExample 1:\n\n\nInput: text1 = \"abcde\", text2 = \"ace\" \nOutput: 3  \nExplanation: The longest common subsequence is \"ace\" and its length is 3.\n\n\nExample 2:\n\n\nInput: text1 = \"abc\", text2 = \"abc\"\nOutput: 3\nExplanation: The longest common subsequence is \"abc\" and its length is 3.\n\n\nExample 3:\n\n\nInput: text1 = \"abc\", text2 = \"def\"\nOutput: 0\nExplanation: There is no such common subsequence, so the result is 0.\n\n\n \nConstraints:\n\n\n\t1 <= text1.length, text2.length <= 1000\n\ttext1 and text2 consist of only lowercase English characters.\n\n",
    template: [
      {
        language: "C++",
        langSlug: "cpp",
        code: "class Solution {\npublic:\n    int longestCommonSubsequence(string text1, string text2) {\n        \n    }\n};"
      },
      {
        language: "Java",
        langSlug: "java",
        code: "class Solution {\n    public int longestCommonSubsequence(String text1, String text2) {\n        \n    }\n}"
      },
      {
        language: "Python",
        langSlug: "python",
        code: "class Solution(object):\n    def longestCommonSubsequence(self, text1, text2):\n        \"\"\"\n        :type text1: str\n        :type text2: str\n        :rtype: int\n        \"\"\"\n        "
      },
      {
        language: "Python3",
        langSlug: "python3",
        code: "class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        "
      },
      {
        language: "C",
        langSlug: "c",
        code: "int longestCommonSubsequence(char * text1, char * text2){\n\n}"
      },
      {
        language: "C#",
        langSlug: "csharp",
        code: "public class Solution {\n    public int LongestCommonSubsequence(string text1, string text2) {\n        \n    }\n}"
      },
      {
        language: "JavaScript",
        langSlug: "javascript",
        code: "/**\n * @param {string} text1\n * @param {string} text2\n * @return {number}\n */\nvar longestCommonSubsequence = function(text1, text2) {\n    \n};"
      },
      {
        language: "TypeScript",
        langSlug: "typescript",
        code: "function longestCommonSubsequence(text1: string, text2: string): number {\n\n};"
      },
      {
        language: "PHP",
        langSlug: "php",
        code: "class Solution {\n\n    /**\n     * @param String $text1\n     * @param String $text2\n     * @return Integer\n     */\n    function longestCommonSubsequence($text1, $text2) {\n        \n    }\n}"
      },
      {
        language: "Swift",
        langSlug: "swift",
        code: "class Solution {\n    func longestCommonSubsequence(_ text1: String, _ text2: String) -> Int {\n        \n    }\n}"
      },
      {
        language: "Kotlin",
        langSlug: "kotlin",
        code: "class Solution {\n    fun longestCommonSubsequence(text1: String, text2: String): Int {\n        \n    }\n}"
      },
      {
        language: "Dart",
        langSlug: "dart",
        code: "class Solution {\n  int longestCommonSubsequence(String text1, String text2) {\n\n  }\n}"
      },
      {
        language: "Go",
        langSlug: "golang",
        code: "func longestCommonSubsequence(text1 string, text2 string) int {\n    \n}"
      },
      {
        language: "Ruby",
        langSlug: "ruby",
        code: "# @param {String} text1\n# @param {String} text2\n# @return {Integer}\ndef longest_common_subsequence(text1, text2)\n    \nend"
      },
      {
        language: "Scala",
        langSlug: "scala",
        code: "object Solution {\n    def longestCommonSubsequence(text1: String, text2: String): Int = {\n        \n    }\n}"
      },
      {
        language: "Rust",
        langSlug: "rust",
        code: "impl Solution {\n    pub fn longest_common_subsequence(text1: String, text2: String) -> i32 {\n        \n    }\n}"
      },
      {
        language: "Racket",
        langSlug: "racket",
        code: "(define/contract (longest-common-subsequence text1 text2)\n  (-> string? string? exact-integer?)\n\n  )"
      },
      {
        language: "Erlang",
        langSlug: "erlang",
        code: "-spec longest_common_subsequence(Text1 :: unicode:unicode_binary(), Text2 :: unicode:unicode_binary()) -> integer().\nlongest_common_subsequence(Text1, Text2) ->\n  ."
      },
      {
        language: "Elixir",
        langSlug: "elixir",
        code: "defmodule Solution do\n  @spec longest_common_subsequence(text1 :: String.t, text2 :: String.t) :: integer\n  def longest_common_subsequence(text1, text2) do\n\n  end\nend"
      }
    ]
  },
  {
    title: "Sliding Window Maximum",
    categories: [
      "Array",
      "Queue",
      "Sliding Window",
      "Heap (Priority Queue)",
      "Monotonic Queue"
    ],
    complexity: "Hard",
    deleted: false,
    deletedAt: null,
    description: "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.\n\nReturn the max sliding window.\n\n \nExample 1:\n\n\nInput: nums = [1,3,-1,-3,5,3,6,7], k = 3\nOutput: [3,3,5,5,6,7]\nExplanation: \nWindow position                Max\n---------------               -----\n[1  3  -1] -3  5  3  6  7       3\n 1 [3  -1  -3] 5  3  6  7       3\n 1  3 [-1  -3  5] 3  6  7       5\n 1  3  -1 [-3  5  3] 6  7       5\n 1  3  -1  -3 [5  3  6] 7       6\n 1  3  -1  -3  5 [3  6  7]      7\n\n\nExample 2:\n\n\nInput: nums = [1], k = 1\nOutput: [1]\n\n\n \nConstraints:\n\n\n\t1 <= nums.length <= 105\n\t-104 <= nums[i] <= 104\n\t1 <= k <= nums.length\n\n",
    template: [
      {
        language: "C++",
        langSlug: "cpp",
        code: "class Solution {\npublic:\n    vector<int> maxSlidingWindow(vector<int>& nums, int k) {\n        \n    }\n};"
      },
      {
        language: "Java",
        langSlug: "java",
        code: "class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        \n    }\n}"
      },
      {
        language: "Python",
        langSlug: "python",
        code: "class Solution(object):\n    def maxSlidingWindow(self, nums, k):\n        \"\"\"\n        :type nums: List[int]\n        :type k: int\n        :rtype: List[int]\n        \"\"\"\n        "
      },
      {
        language: "Python3",
        langSlug: "python3",
        code: "class Solution:\n    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:\n        "
      },
      {
        language: "C",
        langSlug: "c",
        code: "/**\n * Note: The returned array must be malloced, assume caller calls free().\n */\nint* maxSlidingWindow(int* nums, int numsSize, int k, int* returnSize){\n\n}"
      },
      {
        language: "C#",
        langSlug: "csharp",
        code: "public class Solution {\n    public int[] MaxSlidingWindow(int[] nums, int k) {\n        \n    }\n}"
      },
      {
        language: "JavaScript",
        langSlug: "javascript",
        code: "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number[]}\n */\nvar maxSlidingWindow = function(nums, k) {\n    \n};"
      },
      {
        language: "TypeScript",
        langSlug: "typescript",
        code: "function maxSlidingWindow(nums: number[], k: number): number[] {\n\n};"
      },
      {
        language: "PHP",
        langSlug: "php",
        code: "class Solution {\n\n    /**\n     * @param Integer[] $nums\n     * @param Integer $k\n     * @return Integer[]\n     */\n    function maxSlidingWindow($nums, $k) {\n        \n    }\n}"
      },
      {
        language: "Swift",
        langSlug: "swift",
        code: "class Solution {\n    func maxSlidingWindow(_ nums: [Int], _ k: Int) -> [Int] {\n        \n    }\n}"
      },
      {
        language: "Kotlin",
        langSlug: "kotlin",
        code: "class Solution {\n    fun maxSlidingWindow(nums: IntArray, k: Int): IntArray {\n        \n    }\n}"
      },
      {
        language: "Dart",
        langSlug: "dart",
        code: "class Solution {\n  List<int> maxSlidingWindow(List<int> nums, int k) {\n\n  }\n}"
      },
      {
        language: "Go",
        langSlug: "golang",
        code: "func maxSlidingWindow(nums []int, k int) []int {\n    \n}"
      },
      {
        language: "Ruby",
        langSlug: "ruby",
        code: "# @param {Integer[]} nums\n# @param {Integer} k\n# @return {Integer[]}\ndef max_sliding_window(nums, k)\n    \nend"
      },
      {
        language: "Scala",
        langSlug: "scala",
        code: "object Solution {\n    def maxSlidingWindow(nums: Array[Int], k: Int): Array[Int] = {\n        \n    }\n}"
      },
      {
        language: "Rust",
        langSlug: "rust",
        code: "impl Solution {\n    pub fn max_sliding_window(nums: Vec<i32>, k: i32) -> Vec<i32> {\n        \n    }\n}"
      },
      {
        language: "Racket",
        langSlug: "racket",
        code: "(define/contract (max-sliding-window nums k)\n  (-> (listof exact-integer?) exact-integer? (listof exact-integer?))\n\n  )"
      },
      {
        language: "Erlang",
        langSlug: "erlang",
        code: "-spec max_sliding_window(Nums :: [integer()], K :: integer()) -> [integer()].\nmax_sliding_window(Nums, K) ->\n  ."
      },
      {
        language: "Elixir",
        langSlug: "elixir",
        code: "defmodule Solution do\n  @spec max_sliding_window(nums :: [integer], k :: integer) :: [integer]\n  def max_sliding_window(nums, k) do\n\n  end\nend"
      }
    ]
  },
  {
    title: "Merge k Sorted Lists",
    categories: [
      "Linked List",
      "Divide and Conquer",
      "Heap (Priority Queue)",
      "Merge Sort"
    ],
    complexity: "Hard",
    deleted: false,
    deletedAt: null,
    description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.\n\nMerge all the linked-lists into one sorted linked-list and return it.\n\n \nExample 1:\n\n\nInput: lists = [[1,4,5],[1,3,4],[2,6]]\nOutput: [1,1,2,3,4,4,5,6]\nExplanation: The linked-lists are:\n[\n  1->4->5,\n  1->3->4,\n  2->6\n]\nmerging them into one sorted list:\n1->1->2->3->4->4->5->6\n\n\nExample 2:\n\n\nInput: lists = []\nOutput: []\n\n\nExample 3:\n\n\nInput: lists = [[]]\nOutput: []\n\n\n \nConstraints:\n\n\n\tk == lists.length\n\t0 <= k <= 104\n\t0 <= lists[i].length <= 500\n\t-104 <= lists[i][j] <= 104\n\tlists[i] is sorted in ascending order.\n\tThe sum of lists[i].length will not exceed 104.\n\n",
    template: [
      {
        language: "C++",
        langSlug: "cpp",
        code: "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* mergeKLists(vector<ListNode*>& lists) {\n        \n    }\n};"
      },
      {
        language: "Java",
        langSlug: "java",
        code: "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        \n    }\n}"
      },
      {
        language: "Python",
        langSlug: "python",
        code: "# Definition for singly-linked list.\n# class ListNode(object):\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution(object):\n    def mergeKLists(self, lists):\n        \"\"\"\n        :type lists: List[ListNode]\n        :rtype: ListNode\n        \"\"\"\n        "
      },
      {
        language: "Python3",
        langSlug: "python3",
        code: "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:\n        "
      },
      {
        language: "C",
        langSlug: "c",
        code: "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     struct ListNode *next;\n * };\n */\nstruct ListNode* mergeKLists(struct ListNode** lists, int listsSize){\n\n}"
      },
      {
        language: "C#",
        langSlug: "csharp",
        code: "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     public int val;\n *     public ListNode next;\n *     public ListNode(int val=0, ListNode next=null) {\n *         this.val = val;\n *         this.next = next;\n *     }\n * }\n */\npublic class Solution {\n    public ListNode MergeKLists(ListNode[] lists) {\n        \n    }\n}"
      },
      {
        language: "JavaScript",
        langSlug: "javascript",
        code: "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode[]} lists\n * @return {ListNode}\n */\nvar mergeKLists = function(lists) {\n    \n};"
      },
      {
        language: "TypeScript",
        langSlug: "typescript",
        code: "/**\n * Definition for singly-linked list.\n * class ListNode {\n *     val: number\n *     next: ListNode | null\n *     constructor(val?: number, next?: ListNode | null) {\n *         this.val = (val===undefined ? 0 : val)\n *         this.next = (next===undefined ? null : next)\n *     }\n * }\n */\n\nfunction mergeKLists(lists: Array<ListNode | null>): ListNode | null {\n\n};"
      },
      {
        language: "PHP",
        langSlug: "php",
        code: "/**\n * Definition for a singly-linked list.\n * class ListNode {\n *     public $val = 0;\n *     public $next = null;\n *     function __construct($val = 0, $next = null) {\n *         $this->val = $val;\n *         $this->next = $next;\n *     }\n * }\n */\nclass Solution {\n\n    /**\n     * @param ListNode[] $lists\n     * @return ListNode\n     */\n    function mergeKLists($lists) {\n        \n    }\n}"
      },
      {
        language: "Swift",
        langSlug: "swift",
        code: "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     public var val: Int\n *     public var next: ListNode?\n *     public init() { self.val = 0; self.next = nil; }\n *     public init(_ val: Int) { self.val = val; self.next = nil; }\n *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }\n * }\n */\nclass Solution {\n    func mergeKLists(_ lists: [ListNode?]) -> ListNode? {\n        \n    }\n}"
      },
      {
        language: "Kotlin",
        langSlug: "kotlin",
        code: "/**\n * Example:\n * var li = ListNode(5)\n * var v = li.`val`\n * Definition for singly-linked list.\n * class ListNode(var `val`: Int) {\n *     var next: ListNode? = null\n * }\n */\nclass Solution {\n    fun mergeKLists(lists: Array<ListNode?>): ListNode? {\n        \n    }\n}"
      },
      {
        language: "Dart",
        langSlug: "dart",
        code: "/**\n * Definition for singly-linked list.\n * class ListNode {\n *   int val;\n *   ListNode? next;\n *   ListNode([this.val = 0, this.next]);\n * }\n */\nclass Solution {\n  ListNode? mergeKLists(List<ListNode?> lists) {\n\n  }\n}"
      },
      {
        language: "Go",
        langSlug: "golang",
        code: "/**\n * Definition for singly-linked list.\n * type ListNode struct {\n *     Val int\n *     Next *ListNode\n * }\n */\nfunc mergeKLists(lists []*ListNode) *ListNode {\n    \n}"
      },
      {
        language: "Ruby",
        langSlug: "ruby",
        code: "# Definition for singly-linked list.\n# class ListNode\n#     attr_accessor :val, :next\n#     def initialize(val = 0, _next = nil)\n#         @val = val\n#         @next = _next\n#     end\n# end\n# @param {ListNode[]} lists\n# @return {ListNode}\ndef merge_k_lists(lists)\n    \nend"
      },
      {
        language: "Scala",
        langSlug: "scala",
        code: "/**\n * Definition for singly-linked list.\n * class ListNode(_x: Int = 0, _next: ListNode = null) {\n *   var next: ListNode = _next\n *   var x: Int = _x\n * }\n */\nobject Solution {\n    def mergeKLists(lists: Array[ListNode]): ListNode = {\n        \n    }\n}"
      },
      {
        language: "Rust",
        langSlug: "rust",
        code: "// Definition for singly-linked list.\n// #[derive(PartialEq, Eq, Clone, Debug)]\n// pub struct ListNode {\n//   pub val: i32,\n//   pub next: Option<Box<ListNode>>\n// }\n// \n// impl ListNode {\n//   #[inline]\n//   fn new(val: i32) -> Self {\n//     ListNode {\n//       next: None,\n//       val\n//     }\n//   }\n// }\nimpl Solution {\n    pub fn merge_k_lists(lists: Vec<Option<Box<ListNode>>>) -> Option<Box<ListNode>> {\n        \n    }\n}"
      },
      {
        language: "Racket",
        langSlug: "racket",
        code: "; Definition for singly-linked list:\n#|\n\n; val : integer?\n; next : (or/c list-node? #f)\n(struct list-node\n  (val next) #:mutable #:transparent)\n\n; constructor\n(define (make-list-node [val 0])\n  (list-node val #f))\n\n|#\n\n(define/contract (merge-k-lists lists)\n  (-> (listof (or/c list-node? #f)) (or/c list-node? #f))\n\n  )"
      },
      {
        language: "Erlang",
        langSlug: "erlang",
        code: "%% Definition for singly-linked list.\n%%\n%% -record(list_node, {val = 0 :: integer(),\n%%                     next = null :: 'null' | #list_node{}}).\n\n-spec merge_k_lists(Lists :: [#list_node{} | null]) -> #list_node{} | null.\nmerge_k_lists(Lists) ->\n  ."
      },
      {
        language: "Elixir",
        langSlug: "elixir",
        code: "# Definition for singly-linked list.\n#\n# defmodule ListNode do\n#   @type t :: %__MODULE__{\n#           val: integer,\n#           next: ListNode.t() | nil\n#         }\n#   defstruct val: 0, next: nil\n# end\n\ndefmodule Solution do\n  @spec merge_k_lists(lists :: [ListNode.t | nil]) :: ListNode.t | nil\n  def merge_k_lists(lists) do\n\n  end\nend"
      }
    ]
  },
  {
    title: "Regular Expression Matching",
    categories: [
      "String",
      "Dynamic Programming",
      "Recursion"
    ],
    complexity: "Hard",
    deleted: false,
    deletedAt: null,
    description: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:\n\n\n\t'.' Matches any single character.​​​​\n\t'*' Matches zero or more of the preceding element.\n\n\nThe matching should cover the entire input string (not partial).\n\n \nExample 1:\n\n\nInput: s = \"aa\", p = \"a\"\nOutput: false\nExplanation: \"a\" does not match the entire string \"aa\".\n\n\nExample 2:\n\n\nInput: s = \"aa\", p = \"a*\"\nOutput: true\nExplanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes \"aa\".\n\n\nExample 3:\n\n\nInput: s = \"ab\", p = \".*\"\nOutput: true\nExplanation: \".*\" means \"zero or more (*) of any character (.)\".\n\n\n \nConstraints:\n\n\n\t1 <= s.length <= 20\n\t1 <= p.length <= 20\n\ts contains only lowercase English letters.\n\tp contains only lowercase English letters, '.', and '*'.\n\tIt is guaranteed for each appearance of the character '*', there will be a previous valid character to match.\n\n",
    template: [
      {
        language: "C++",
        langSlug: "cpp",
        code: "class Solution {\npublic:\n    bool isMatch(string s, string p) {\n        \n    }\n};"
      },
      {
        language: "Java",
        langSlug: "java",
        code: "class Solution {\n    public boolean isMatch(String s, String p) {\n        \n    }\n}"
      },
      {
        language: "Python",
        langSlug: "python",
        code: "class Solution(object):\n    def isMatch(self, s, p):\n        \"\"\"\n        :type s: str\n        :type p: str\n        :rtype: bool\n        \"\"\"\n        "
      },
      {
        language: "Python3",
        langSlug: "python3",
        code: "class Solution:\n    def isMatch(self, s: str, p: str) -> bool:\n        "
      },
      {
        language: "C",
        langSlug: "c",
        code: "bool isMatch(char * s, char * p){\n\n}"
      },
      {
        language: "C#",
        langSlug: "csharp",
        code: "public class Solution {\n    public bool IsMatch(string s, string p) {\n        \n    }\n}"
      },
      {
        language: "JavaScript",
        langSlug: "javascript",
        code: "/**\n * @param {string} s\n * @param {string} p\n * @return {boolean}\n */\nvar isMatch = function(s, p) {\n    \n};"
      },
      {
        language: "TypeScript",
        langSlug: "typescript",
        code: "function isMatch(s: string, p: string): boolean {\n\n};"
      },
      {
        language: "PHP",
        langSlug: "php",
        code: "class Solution {\n\n    /**\n     * @param String $s\n     * @param String $p\n     * @return Boolean\n     */\n    function isMatch($s, $p) {\n        \n    }\n}"
      },
      {
        language: "Swift",
        langSlug: "swift",
        code: "class Solution {\n    func isMatch(_ s: String, _ p: String) -> Bool {\n        \n    }\n}"
      },
      {
        language: "Kotlin",
        langSlug: "kotlin",
        code: "class Solution {\n    fun isMatch(s: String, p: String): Boolean {\n        \n    }\n}"
      },
      {
        language: "Dart",
        langSlug: "dart",
        code: "class Solution {\n  bool isMatch(String s, String p) {\n\n  }\n}"
      },
      {
        language: "Go",
        langSlug: "golang",
        code: "func isMatch(s string, p string) bool {\n    \n}"
      },
      {
        language: "Ruby",
        langSlug: "ruby",
        code: "# @param {String} s\n# @param {String} p\n# @return {Boolean}\ndef is_match(s, p)\n    \nend"
      },
      {
        language: "Scala",
        langSlug: "scala",
        code: "object Solution {\n    def isMatch(s: String, p: String): Boolean = {\n        \n    }\n}"
      },
      {
        language: "Rust",
        langSlug: "rust",
        code: "impl Solution {\n    pub fn is_match(s: String, p: String) -> bool {\n        \n    }\n}"
      },
      {
        language: "Racket",
        langSlug: "racket",
        code: "(define/contract (is-match s p)\n  (-> string? string? boolean?)\n\n  )"
      },
      {
        language: "Erlang",
        langSlug: "erlang",
        code: "-spec is_match(S :: unicode:unicode_binary(), P :: unicode:unicode_binary()) -> boolean().\nis_match(S, P) ->\n  ."
      },
      {
        language: "Elixir",
        langSlug: "elixir",
        code: "defmodule Solution do\n  @spec is_match(s :: String.t, p :: String.t) :: boolean\n  def is_match(s, p) do\n\n  end\nend"
      }
    ]
  },
  {
    title: "Median of Two Sorted Arrays",
    categories: [
      "Array",
      "Binary Search",
      "Divide and Conquer"
    ],
    complexity: "Hard",
    deleted: false,
    deletedAt: null,
    description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.\n\nThe overall run time complexity should be O(log (m+n)).\n\n \nExample 1:\n\n\nInput: nums1 = [1,3], nums2 = [2]\nOutput: 2.00000\nExplanation: merged array = [1,2,3] and median is 2.\n\n\nExample 2:\n\n\nInput: nums1 = [1,2], nums2 = [3,4]\nOutput: 2.50000\nExplanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.\n\n\n \nConstraints:\n\n\n\tnums1.length == m\n\tnums2.length == n\n\t0 <= m <= 1000\n\t0 <= n <= 1000\n\t1 <= m + n <= 2000\n\t-106 <= nums1[i], nums2[i] <= 106\n\n",
    template: [
      {
        language: "C++",
        langSlug: "cpp",
        code: "class Solution {\npublic:\n    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n        \n    }\n};"
      },
      {
        language: "Java",
        langSlug: "java",
        code: "class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        \n    }\n}"
      },
      {
        language: "Python",
        langSlug: "python",
        code: "class Solution(object):\n    def findMedianSortedArrays(self, nums1, nums2):\n        \"\"\"\n        :type nums1: List[int]\n        :type nums2: List[int]\n        :rtype: float\n        \"\"\"\n        "
      },
      {
        language: "Python3",
        langSlug: "python3",
        code: "class Solution:\n    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:\n        "
      },
      {
        language: "C",
        langSlug: "c",
        code: "double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size){\n\n}"
      },
      {
        language: "C#",
        langSlug: "csharp",
        code: "public class Solution {\n    public double FindMedianSortedArrays(int[] nums1, int[] nums2) {\n        \n    }\n}"
      },
      {
        language: "JavaScript",
        langSlug: "javascript",
        code: "/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number}\n */\nvar findMedianSortedArrays = function(nums1, nums2) {\n    \n};"
      },
      {
        language: "TypeScript",
        langSlug: "typescript",
        code: "function findMedianSortedArrays(nums1: number[], nums2: number[]): number {\n\n};"
      },
      {
        language: "PHP",
        langSlug: "php",
        code: "class Solution {\n\n    /**\n     * @param Integer[] $nums1\n     * @param Integer[] $nums2\n     * @return Float\n     */\n    function findMedianSortedArrays($nums1, $nums2) {\n        \n    }\n}"
      },
      {
        language: "Swift",
        langSlug: "swift",
        code: "class Solution {\n    func findMedianSortedArrays(_ nums1: [Int], _ nums2: [Int]) -> Double {\n        \n    }\n}"
      },
      {
        language: "Kotlin",
        langSlug: "kotlin",
        code: "class Solution {\n    fun findMedianSortedArrays(nums1: IntArray, nums2: IntArray): Double {\n        \n    }\n}"
      },
      {
        language: "Dart",
        langSlug: "dart",
        code: "class Solution {\n  double findMedianSortedArrays(List<int> nums1, List<int> nums2) {\n\n  }\n}"
      },
      {
        language: "Go",
        langSlug: "golang",
        code: "func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {\n    \n}"
      },
      {
        language: "Ruby",
        langSlug: "ruby",
        code: "# @param {Integer[]} nums1\n# @param {Integer[]} nums2\n# @return {Float}\ndef find_median_sorted_arrays(nums1, nums2)\n    \nend"
      },
      {
        language: "Scala",
        langSlug: "scala",
        code: "object Solution {\n    def findMedianSortedArrays(nums1: Array[Int], nums2: Array[Int]): Double = {\n        \n    }\n}"
      },
      {
        language: "Rust",
        langSlug: "rust",
        code: "impl Solution {\n    pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {\n        \n    }\n}"
      },
      {
        language: "Racket",
        langSlug: "racket",
        code: "(define/contract (find-median-sorted-arrays nums1 nums2)\n  (-> (listof exact-integer?) (listof exact-integer?) flonum?)\n\n  )"
      },
      {
        language: "Erlang",
        langSlug: "erlang",
        code: "-spec find_median_sorted_arrays(Nums1 :: [integer()], Nums2 :: [integer()]) -> float().\nfind_median_sorted_arrays(Nums1, Nums2) ->\n  ."
      },
      {
        language: "Elixir",
        langSlug: "elixir",
        code: "defmodule Solution do\n  @spec find_median_sorted_arrays(nums1 :: [integer], nums2 :: [integer]) :: float\n  def find_median_sorted_arrays(nums1, nums2) do\n\n  end\nend"
      }
    ]
  },
  {
    title: "Wildcard Matching",
    categories: [
      "String",
      "Dynamic Programming",
      "Greedy",
      "Recursion"
    ],
    complexity: "Hard",
    deleted: false,
    deletedAt: null,
    description: "Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:\n\n\n\t'?' Matches any single character.\n\t'*' Matches any sequence of characters (including the empty sequence).\n\n\nThe matching should cover the entire input string (not partial).\n\n \nExample 1:\n\n\nInput: s = \"aa\", p = \"a\"\nOutput: false\nExplanation: \"a\" does not match the entire string \"aa\".\n\n\nExample 2:\n\n\nInput: s = \"aa\", p = \"*\"\nOutput: true\nExplanation: '*' matches any sequence.\n\n\nExample 3:\n\n\nInput: s = \"cb\", p = \"?a\"\nOutput: false\nExplanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.\n\n\n \nConstraints:\n\n\n\t0 <= s.length, p.length <= 2000\n\ts contains only lowercase English letters.\n\tp contains only lowercase English letters, '?' or '*'.\n\n",
    template: [
      {
        language: "C++",
        langSlug: "cpp",
        code: "class Solution {\npublic:\n    bool isMatch(string s, string p) {\n        \n    }\n};"
      },
      {
        language: "Java",
        langSlug: "java",
        code: "class Solution {\n    public boolean isMatch(String s, String p) {\n        \n    }\n}"
      },
      {
        language: "Python",
        langSlug: "python",
        code: "class Solution(object):\n    def isMatch(self, s, p):\n        \"\"\"\n        :type s: str\n        :type p: str\n        :rtype: bool\n        \"\"\"\n        "
      },
      {
        language: "Python3",
        langSlug: "python3",
        code: "class Solution:\n    def isMatch(self, s: str, p: str) -> bool:\n        "
      },
      {
        language: "C",
        langSlug: "c",
        code: "bool isMatch(char * s, char * p){\n\n}"
      },
      {
        language: "C#",
        langSlug: "csharp",
        code: "public class Solution {\n    public bool IsMatch(string s, string p) {\n        \n    }\n}"
      },
      {
        language: "JavaScript",
        langSlug: "javascript",
        code: "/**\n * @param {string} s\n * @param {string} p\n * @return {boolean}\n */\nvar isMatch = function(s, p) {\n    \n};"
      },
      {
        language: "TypeScript",
        langSlug: "typescript",
        code: "function isMatch(s: string, p: string): boolean {\n\n};"
      },
      {
        language: "PHP",
        langSlug: "php",
        code: "class Solution {\n\n    /**\n     * @param String $s\n     * @param String $p\n     * @return Boolean\n     */\n    function isMatch($s, $p) {\n        \n    }\n}"
      },
      {
        language: "Swift",
        langSlug: "swift",
        code: "class Solution {\n    func isMatch(_ s: String, _ p: String) -> Bool {\n        \n    }\n}"
      },
      {
        language: "Kotlin",
        langSlug: "kotlin",
        code: "class Solution {\n    fun isMatch(s: String, p: String): Boolean {\n        \n    }\n}"
      },
      {
        language: "Dart",
        langSlug: "dart",
        code: "class Solution {\n  bool isMatch(String s, String p) {\n\n  }\n}"
      },
      {
        language: "Go",
        langSlug: "golang",
        code: "func isMatch(s string, p string) bool {\n    \n}"
      },
      {
        language: "Ruby",
        langSlug: "ruby",
        code: "# @param {String} s\n# @param {String} p\n# @return {Boolean}\ndef is_match(s, p)\n    \nend"
      },
      {
        language: "Scala",
        langSlug: "scala",
        code: "object Solution {\n    def isMatch(s: String, p: String): Boolean = {\n        \n    }\n}"
      },
      {
        language: "Rust",
        langSlug: "rust",
        code: "impl Solution {\n    pub fn is_match(s: String, p: String) -> bool {\n        \n    }\n}"
      },
      {
        language: "Racket",
        langSlug: "racket",
        code: "(define/contract (is-match s p)\n  (-> string? string? boolean?)\n\n  )"
      },
      {
        language: "Erlang",
        langSlug: "erlang",
        code: "-spec is_match(S :: unicode:unicode_binary(), P :: unicode:unicode_binary()) -> boolean().\nis_match(S, P) ->\n  ."
      },
      {
        language: "Elixir",
        langSlug: "elixir",
        code: "defmodule Solution do\n  @spec is_match(s :: String.t, p :: String.t) :: boolean\n  def is_match(s, p) do\n\n  end\nend"
      }
    ]
  },
]

const dataLength = data.length;

for (var i = 0; i < dataLength; i++) {
  let currData = data[i];
  currData.categories.sort();
}


db.questions.insertMany(data);
