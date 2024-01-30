function countChar(c, s) {
    let count = 0
    for(let i = 0; i < s.length; i++) {
        if(s.at(i) === c) {
            count++
        }
    }
    return count
}
module.exports = countChar