import reverseWords from '../../code/string/reverseWords.js';

// 输入: "Let's take LeetCode contest"
// 输出: "s'teL ekat edoCteeL tsetnoc"
test('reverse words', () => {
    expect(reverseWords(`Let's take LeetCode contest`)).toBe(
        `s'teL ekat edoCteeL tsetnoc`
    );
});
