// <!-- [Unique Morse Code Words](https://leetcode.com/problems/unique-morse-code-words/)

// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

// -   `'a'`  maps to  `".-"`,
// -   `'b'`  maps to  `"-..."`,
// -   `'c'`  maps to  `"-.-."`, and so on.

// For convenience, the full table for the  `26`  letters of the English alphabet is given below:

// `[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]`

// Given an array of strings  `words`  where each word can be written as a concatenation of the Morse code of each letter.

// -   For example,  `"cab"`  can be written as  `"-.-..--..."`, which is the concatenation of  `"-.-."`,  `".-"`, and  `"-..."`. We will call such a concatenation the  **transformation**  of a word.

// Return  _the number of different  **transformations**  among all words we have_.


// **Example 1:**

// **Input:** words = ["gin","zen","gig","msg"]
// **Output:** 2
// **Explanation:** The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations: "--...-." and "--...--.".

// **Example 2:**

// **Input:** words = ["a"]
// **Output:** 1 -->

 const alphabetCode = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
};
var uniqueMorseRepresentations = function(words) {
    let set = new Set();
    for (let i = 0; i < words.length; i++) {
        let moWord = "";
            for (let j = 0; j < words[i].length; j++) {
                moWord += alphabetCode[words[i][j]];
            }
        set.add(moWord);
    }
    return set.size;
};