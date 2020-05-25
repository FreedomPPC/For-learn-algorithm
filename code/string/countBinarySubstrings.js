// leetcode 696 计数二进制子串 countBinarySubstrings
// 00110011
// 0011 01 1100 10 0011 01
const countBinarySubstrings = str => {
    const r = [];

    function match(str) {
        let j = str.match(/^(0+|1+)/)[0];
        let o = (j[0] ^ 1).toString().repeat(j.length);
        let reg = new RegExp(`^(${j}${o})`);
        if (reg.test(str)) {
            return RegExp.$1;
        } else {
            return '';
        }
    }
    for (let i = 0; i < str.length - 1; i++) {
        const result = match(str.slice(i));

        if (result) {
            r.push(result);
        }
    }
    return r;
};
const arr = [1,2, 3]
export default countBinarySubstrings;
