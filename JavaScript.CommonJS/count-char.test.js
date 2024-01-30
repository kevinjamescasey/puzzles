const countChar = require('./count-char')

test('returns number of occurences of given char in string', () => {

    expect(countChar('a', 'b')).toEqual(0)
    expect(countChar('a', '')).toEqual(0)
    expect(countChar('a', 'a')).toEqual(1)
    expect(countChar('a', 'aa')).toEqual(2)
    expect(countChar('a', 'ababa')).toEqual(3)
    expect(countChar('a', 'a')).toEqual(1)
})