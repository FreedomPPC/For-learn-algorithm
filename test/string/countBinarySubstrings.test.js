import countBinarySubstrings from '../../code/string/countBinarySubstrings';

test('countBinarySubstrings(10101)', () => {
    expect(countBinarySubstrings('00110011')).toEqual([
        '0011',
        '01',
        '1100',
        '10',
        '0011',
        '01'
    ]);
});
