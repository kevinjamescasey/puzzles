function vowelConsonantCounts(s) {
    let vowelCount = 0
    let consonantCount = 0
    for(const c of [...s]){
        if("aeiou".includes(c)){
            vowelCount++
        } else {
            consonantCount++
        }
    }
    return [vowelCount, consonantCount]
}

export default vowelConsonantCounts