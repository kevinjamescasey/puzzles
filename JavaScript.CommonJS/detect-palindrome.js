function isPalindrome(s) {
    for(let i = 0; i < Math.floor(s.length / 2); i++ ){
        if(s.charAt(i) != s.charAt(s.length - 1 - i)){
            return false
        }
    }
    return true
}
module.exports = isPalindrome