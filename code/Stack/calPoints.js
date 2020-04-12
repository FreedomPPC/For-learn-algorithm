// leetcode 682 棒球比赛
// https://leetcode-cn.com/problems/baseball-game/
export default (arr) => {
    const result = [];
    let pre1;
    let pre2;
    arr.forEach((item) => {
        switch (item) {
            case 'C':
                if (result.length) {
                    result.pop();
                }
                break;
            case 'D':
                pre1 = result.pop();
                result.push(pre1, pre1 * 2);
                break;
            case '+':
                pre1 = result.pop();
                pre2 = result.pop();

                result.push(pre2, pre1, pre2 + pre1);
                break;
            default:
                result.push(Number(item));
        }
    });

    return result.reduce((pre, cur) => pre + cur);
};
