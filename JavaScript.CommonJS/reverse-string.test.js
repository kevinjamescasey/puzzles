const reverseString = require('./reverse-string');

test('returns a string with the charcters in the reverse order', ()=>{
    const s = 'abcdef'
    expect(reverseString(s)).toEqual('fedcba')
})

test('trivial edge cases work', ()=>{
    expect(reverseString('')).toEqual('')
    expect(reverseString('a')).toEqual('a')
})