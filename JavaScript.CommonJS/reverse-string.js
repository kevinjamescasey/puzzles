function reverseString(s) {
    const reversed = []
    for(let i = s.length - 1; i >= 0; i--){
        reversed.push(s.charAt(i))
    }
    return reversed.join('')
}
module.exports = reverseString