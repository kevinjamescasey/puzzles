const isPalindrome = require('./detect-palindrome')

test('returns true when passed a palindrome', () => {
    expect(isPalindrome("aba")).toBe(true)
    expect(isPalindrome("racecar")).toBe(true)
    expect(isPalindrome("tacocat")).toBe(true)
    expect(isPalindrome("evilolive")).toBe(true)
})

test('returns false when passed a non-palindrome', () => {
    expect(isPalindrome("ab")).toBe(false)
})