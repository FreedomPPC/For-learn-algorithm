// leetcode 605 种花问题
export default (arr, n) => {
    // 最大种花数量
    // 示例数组[0,0,1,0,0,0,1,0,0,0,0,0,0,1]
    let max = 0;
    // 最后一块地的右侧默认是0;最后一块地能否种花，取决于左边是否有花
    arr.push(0);
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === 0) {
            if (i === 0 && arr[1] === 0) {
                max++;
                i++;
            } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
                // 默认添加的空地，不会走进这个判断
                max++;
                i++;
            }
        }
    }
    return max >= n;
};
