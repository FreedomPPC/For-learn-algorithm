// leetcode 17.电话号码的字母组合
export default str => {
    // 电话号码映射
    const map = ['', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    // 如果只按一个键返回结果
    if (str.length < 2) return map[str].split('');
    // 获取数值 23=> [2,3]
    const num = str.split('');
    // 取出对应的code 23=> [abc, def]
    const code = num.map(item => {
        return map[item];
    });
    // 开始组合
    function comb(arr) {
        const temp = [];
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                temp.push(`${arr[0][i]}${arr[1][j]}`);
            }
        }
        // 删除前两位，用临时数组替换，改变数组的长度
        arr.splice(0, 2, temp);
        // 如果剩余数组的长度大于1，递归，否则返回第一个参数
        if (arr.length > 1) {
            return comb(arr);
        } else {
            return temp;
        }
    }

    return comb(code);
};
