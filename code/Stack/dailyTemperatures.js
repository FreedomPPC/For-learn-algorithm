// 739 每日温度
// https://leetcode-cn.com/problems/daily-temperatures/
// 解题误区：把温度值压入栈中，导致如果碰到相同温度的值，index不好寻找，所以直接压入index入栈
const dailyTemperatures = function (T) {
    const arr = new Array(T.length).fill(0);
    const stack = [];
    T.forEach((item, index) => {
        while (item > T[stack[stack.length - 1]]) {
            arr[stack[stack.length - 1]] = index - stack[stack.length - 1];
            stack.pop();
        }
        stack.push(index);
    });
    return arr;
};
const T = [23, 24, 25, 21, 19, 22, 26, 23];
const T1 = [89, 62, 70, 58, 47, 47, 46, 76, 100, 70];
console.log(dailyTemperatures(T)); // 1 1 4 2 1 1 0 0
console.log(dailyTemperatures(T1)); // 8 1 5 4 3 2 1 1 0 0
