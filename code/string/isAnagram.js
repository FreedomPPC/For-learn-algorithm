// leetcode 242
// https://leetcode-cn.com/problems/valid-anagram/

const s = 'anagram';
const t = 'nagaram';
const isAnagram = function (s, t) {
    // return s.split('').sort().join('') == t.split('').sort().join('');
    let wordList = {};
    for (let item of s) {
        wordList[item] = !!wordList[item] ? ++wordList[item] : 1;
    }

    for (let item of t) {
        if (!wordList[item]) {
            return false;
        }
        wordList[item] == --wordList[item];
    }

    for (let key in wordList) {
        if (wordList[key] > 0) {
            return false;
        }
    }
    return true;
};
console.log(isAnagram(s, t));
