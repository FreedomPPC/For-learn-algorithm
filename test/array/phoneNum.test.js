import phoneNum from '../../code/array/phoneNum';

test('phoneNum:23', () => {
    expect(phoneNum('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
});
test('phoneNum:234', () => {
    expect(phoneNum('234')).toEqual([
        'adg',
        'adh',
        'adi',
        'aeg',
        'aeh',
        'aei',
        'afg',
        'afh',
        'afi',
        'bdg',
        'bdh',
        'bdi',
        'beg',
        'beh',
        'bei',
        'bfg',
        'bfh',
        'bfi',
        'cdg',
        'cdh',
        'cdi',
        'ceg',
        'ceh',
        'cei',
        'cfg',
        'cfh',
        'cfi'
    ]);
});
