// leetcode 557 反转字符串
// 第一种方法
// function reverseWords(str) {
//     const arr = str.split(' ');
//     const result = arr.map(item => {
//         return item
//             .split('')
//             .reverse()
//             .join('');
//     });
//     return result.join(' ');
// }

// 第二种方法
// function reverseWords(str) {
//     return str
//         .split(' ')
//         .map(item => {
//             return item
//                 .split('')
//                 .reverse()
//                 .join('');
//         })
//         .join(' ');
// }

// 第三种方法
function reverseWords(str) {
    // str.match(/\S+/g)
    return str
        .match(/[\w']+/g)
        .map(item => {
            return item
                .split('')
                .reverse()
                .join('');
        })
        .join(' ');
}
export default reverseWords;
