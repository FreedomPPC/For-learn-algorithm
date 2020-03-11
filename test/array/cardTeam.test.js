// 卡牌分组
import cardTeam from '../../code/array/cardTeam';

test('cardTeam:[1,2,3,4,4,3,2,1]', () => {
    expect(cardTeam([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true);
});
test('cardTeam:[1,1,1,2,2,2,3,3]', () => {
    expect(cardTeam([1, 1, 1, 2, 2, 2, 3, 3])).toBe(false);
});
test('cardTeam:[1,1,2,2,2,2]', () => {
    expect(cardTeam([1, 1, 2, 2, 2, 2])).toBe(true);
});
