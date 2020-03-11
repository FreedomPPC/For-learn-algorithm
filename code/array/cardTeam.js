// leetcode 914 卡牌分组
export default function cardTeam(arr) {
    if (arr.length === 1) {
        return false;
    }
    const group = [];
    // 统计数组中相同元素的个数[1,2,3,4,4,3,2,1]=> {1:2, 2:2, 3:2, 4:2}
    const temp = {};
    for (const item of arr) {
        temp[item] = temp[item] ? temp[item] + 1 : 1;
    }
    // 取出数字个数
    for (const num of Object.values(temp)) {
        group.push(num);
    }

    // 求最大公约数函数
    const gcd = (a, b) => {
        if (a % b === 0) {
            return b;
        }

        return gcd(b, a % b);
    };
    // 循环遍历
    while (group.length > 1) {
        // 依次取出前两个数进行比较
        const a = group.shift();
        const b = group.shift();
        const v = gcd(a, b);
        if (v === 1) {
            return false;
        } else {
            // 将最大公约数添加进数组，在与下一个元素进行比较，直至结束
            group.unshift(v);
        }
    }
    // 如果group的长度等于1,第一个元素的最大公约数要大于1，才算满足条件
    return group.length ? group[0] > 1 : false;
}
