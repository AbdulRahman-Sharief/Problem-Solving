/* The Problem

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.*/

//The first Solution

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let freqCounter1 = {},
    freqCounter2 = {};
  for (let char of s) {
    freqCounter1[char] = (freqCounter1[char] || 0) + 1;
  }
  for (let char of t) {
    freqCounter2[char] = (freqCounter2[char] || 0) + 1;
  }
  console.log(freqCounter1);
  console.log(freqCounter2);
  for (let key in freqCounter1) {
    if (
      freqCounter1[key] !== freqCounter2[key] ||
      key in freqCounter2 === false
    ) {
      return false;
    }
  }
  return true;
};
//==================================================================================

// The Second Solution

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < t.length; i++) {
    let letter = t[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
};
