function isAnagram(s1,s2) {
    if(s1.length !== s2.length){
        return false
    }
    const a1 = [...s1].sort()
    const a2 = Array.from(s2).sort()

    return a1.every((e,i) => e === a2[i])

}

module.exports = isAnagram