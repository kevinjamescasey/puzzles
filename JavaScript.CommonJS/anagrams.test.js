const isAnagram = require('./anagram')

test('returns true when strings are anagrams', () => {
    expect(isAnagram("ab","ba")).toEqual(true)
    expect(isAnagram("aabb","baba")).toEqual(true)
    expect(isAnagram("abc","bac")).toEqual(true)
    expect(isAnagram("a","a")).toEqual(true)
})

test('returns false when strings are not anagrams', () => {
    expect(isAnagram("a","b")).toEqual(false)
    expect(isAnagram("abcd","bca")).toEqual(false)
})