import vowelConsonantCounts from "./vowel-consonant-count"

test('returns the number of vowels and consonants in the given string', () => {
    expect(vowelConsonantCounts('cowabunga')).toEqual([4, 5])
    expect(vowelConsonantCounts('')).toEqual([0, 0])
    expect(vowelConsonantCounts('b')).toEqual([0, 1])
    expect(vowelConsonantCounts('a')).toEqual([1, 0])
})

test('counts all non-vowels as consonants', () => {
    expect(vowelConsonantCounts('!@#$%^&*()')).toEqual([0, 10])
})

