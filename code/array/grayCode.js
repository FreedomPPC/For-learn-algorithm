// leetcode 89.格雷编码
const grayCode = n => {
    if (n === 0) {
        return [0];
    }
    function make(n) {
        if (n === 1) {
            return ['0', '1'];
        } else {
            // 拿到上一步的结果回炉重造
            const preCode = make(n - 1);
            const result = [];
            const max = Math.pow(2, n) - 1;
            for (let i = 0; i < preCode.length; i++) {
                result[i] = `0${preCode[i]}`;
                result[max - i] = `1${preCode[i]}`;
            }

            return result;
        }
    }

    return make(n).map(item => parseInt(item, 2));
};

export default grayCode;
